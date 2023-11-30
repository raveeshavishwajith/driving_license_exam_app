import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Quizmenu = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={{paddingTop: 40}}></Text>
      <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate("Quiz")}>
        <Text style={styles.text}>woshr 01</Text>
      </TouchableOpacity>
      <Text style={{paddingTop: 30}}></Text>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>woshr 02</Text>
      </TouchableOpacity>
      <Text style={{paddingTop: 30}}></Text>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>woshr 03</Text>
      </TouchableOpacity>      
      <Text style={{paddingTop: 30}}></Text>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>woshr 04</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Quizmenu

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        justifyContent: 'center',
        marginHorizontal: 75,
        paddingTop: 70
    },
    touch:{
        height: 80,
        width: 250,
        backgroundColor: '#73BDB0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#000000', 
    },
    text:{
        fontFamily: 'apex-a.pura-008', 
        fontSize: 40,
        borderColor: '#ffffff',
    }
})