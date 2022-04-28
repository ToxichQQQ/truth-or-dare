import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


export function CardScreen() {
    return <View style={styles.container}>
        <Text>CardScreen</Text>
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})