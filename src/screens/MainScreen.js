import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";


export function MainScreen() {
    return <View style={styles.container}>
        <CustomText size={36} text='Bla-vla' weight='light'/>
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME.BACKGROUND_COLOR,
        justifyContent:'center',
        alignItems:'center'
    }
})