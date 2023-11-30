import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View>
        <Title />
        <View>
            <Image 
                source={{
                    uri:"https://img.freepik.com/free-vector/choose-right-way-realistic-concept_1284-5715.jpg?w=900&t=st=1686693038~exp=1686693638~hmac=2493c6c0b2bfb5780d930d80674da3321079b6009760de975184a58908fd93e1"
                }}
                style={styles.banner} 
                resizeMode='contain'
            />
        </View>
        <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate("Quizmenu")}>
            <Text style={styles.btn}>wdrïU lrkak</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
        paddingBottom: 60,
        marginHorizontal: 45
    },
    touch:{
        marginVertical: 20,
        height: 80,
        width: 250,
        backgroundColor: '#73BDB0',
        marginHorizontal: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000000'
    },
    btn: { 
        fontSize: 40,
        textAlign:'center',
        fontFamily: 'apex-a.pura-008',
        color: '#000000',
        paddingBottom: 10
    }
})