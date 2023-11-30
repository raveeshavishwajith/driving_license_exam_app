import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import questions from '../data/questions'
import { useNavigation } from '@react-navigation/native'

const Quiz = () => {
    const navigation = useNavigation();
    const data = questions;
    const totalQuestions = data.length;

    //points
    const [points, setPoints] = useState(0);

    // index of the question
    const [index, setIndex] = useState(0);

    // answer Status (true or false)
    const [answerStatus, setAnswerStstus] = useState(null);

    //answers
    const [answers, setAnswers] = useState([])

    //selected answer
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    //Counter
    const [counter, setCounter] = useState(15);

    // interval
    let intervl = null;

    useEffect(() => {
        if (selectedAnswerIndex !== null) {
            if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
                setPoints((points) => points + 10);
                answers.push({ question: index + 1, answer: true })
            }
            else {
                setAnswerStstus(false);
                answers.push({ question: index + 1, answer: false })
            }
        }
    })

    useEffect(() => {
        setSelectedAnswerIndex(null);
        setAnswerStstus(null);
    }, [currentQuestion])

    useEffect(() => {
        const myInterval = () => {
            if (counter >= 1) {
                setCounter((counter) => counter - 1);
            }
            if (counter === 0) {
                setIndex(index + 1);
                setCounter(15);
            }

        }
        intervl = setTimeout(myInterval, 1000);

        // clean up
        return () => {
            clearTimeout(intervl)
        }
    }, [counter]);

    useEffect(() => {
        if (index + 1 > data.length) {
            navigation.navigate('Results', {
                answers: answers,
                points: points
            })
        }
    }, [currentQuestion])

    useEffect(() => {
        if (!intervl) {
            setCounter(15);
        }
    }, [index])

    const currentQuestion = data[index];
    console.log(currentQuestion);

    return (
        <View>
            <View style={[styles.header, { padding: 10 }]}>
                <Text>Quiz Challenge</Text>
                <Pressable style={{padding: 10, backgroundColor: 'magenta',borderRadius: 20}}>
                    <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{counter}</Text>
                </Pressable>
            </View>

            <View style={[styles.header, { marginHorizontal: 10 }]}>
                <Text>Your Progress</Text>
                <Text>({index}/{totalQuestions}) questions answered</Text>
            </View>

            <View style={styles.question}>
                <Text style={styles.font}>{currentQuestion?.question}</Text>
                <View style={styles.ques}>
                    {currentQuestion?.options.map((item, index) => (
                        <Pressable onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
                            style={selectedAnswerIndex === index && index === currentQuestion.correctAnswerIndex ? {
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#00FFFF',
                                backgroundColor: "green",
                                marginVertical: 15,
                                borderRadius: 20
                            } : selectedAnswerIndex !== null && selectedAnswerIndex === index ? {
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#00FFFF',
                                marginVertical: 15,
                                backgroundColor: 'red',
                                borderRadius: 20
                            } : {
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#00FFFF',
                                marginVertical: 15,
                                borderRadius: 20
                            }}>
                            <Text style={styles.quiz}>{item.options}</Text>
                            <Text>{item.answer}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    question: {
        marginTop: 10,
        backgroundColor: "#F8F8FF",
        padding: 10,
        borderRadius: 6
    },
    font: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ques: {
        marginTop: 12
    },
    quiz: {
        borderColor: '#00FFFF',
        textAlign: 'center',
        borderWidth: 0.5,
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 10
    }
})