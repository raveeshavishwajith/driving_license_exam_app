import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useEffect} from 'react'
import { useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const [score, setScores] = useState(0);
    const getQuiz = async()=>{
        const url="https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]))
    };

    useEffect(()=> {
        getQuiz();
    },[]);

    const handleNextPress=()=>{
        setQues(ques+1);
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }

    const handlePreviPress=()=>{
        setQues(ques-1)
    }

    const generateOptionsAndShuffle=(_question)=>{
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)

        return options
    }

    const handleSelectedOption=(_option)=>{
        if(_option === questions[ques].correct_answer){
            setScores(score+10);
        }
        if(ques !== 9){
            setQues(ques+1);
            setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
    }

  return (
    <View style={styles.container}>
        {questions && (
        <View style={styles.parent}>
            <View style={styles.top}>
                <Text style={styles.question}>
                    01. {decodeURIComponent(questions[ques].question)}
                </Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.option} onPress={()=> handleSelectedOption(options[0])}>
                    <Text style={styles.ans}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={()=> handleSelectedOption(options[1])}>
                    <Text style={styles.ans}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={()=> handleSelectedOption(options[2])}>
                    <Text style={styles.ans}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={()=> handleSelectedOption(options[3])}>
                    <Text style={styles.ans}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>

                {ques !==0 && 
                    <TouchableOpacity style={styles.btn} onPress={handlePreviPress}>
                        <Text style={styles.btntext}>Back</Text>
                    </TouchableOpacity>
                }
                {ques !== 9 &&
                    <TouchableOpacity style={styles.btn} onPress={handleNextPress}>
                        <Text style={styles.btntext}>Next</Text>
                    </TouchableOpacity >                    
                }
                {ques === 9 &&
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Results", {score: score})}>
                        <Text style={styles.btntext}>Show Results</Text>
                    </TouchableOpacity>
                }

            </View>
        </View>
        )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    bottom: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 20,
        // alignItems: 'right'
        paddingHorizontal: 16
    },
    btntext: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    question: {
        // fontFamily: 'fmaraliya', 
        fontSize: 25,
        color: 'black'
    },
    ans: {
        fontSize: 18,
        fontWeight: 600,
        color: 'white'
    },
    option: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#34A0A4",
        paddingHorizontal: 12,
        borderRadius: 12
    },
    parent: {
        height: '100%'
    }
    
})