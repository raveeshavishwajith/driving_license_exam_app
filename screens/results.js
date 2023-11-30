import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Results = ({navigation, route}) => {
    const params = route.params;
    console.log(params)

  return (
    <View style={styles.container}>
        <Text>This is results</Text>
        <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Quizmenu")}>
            <Text>Restart</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%'
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})