import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({navigation}) => {
  return (
    <View>
      <Text style={styles.main}>wdhqfndajka</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    main: {
        paddingTop: 100,
        paddingBottom: 25,
        fontFamily: 'apex-a.pura-008', 
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
})