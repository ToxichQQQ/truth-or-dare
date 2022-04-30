import React from 'react'
import {Pressable,Text,StyleSheet} from 'react-native'
import {THEME} from "../theme/mainTheme";


export function CustomButton({buttonStyle,textStyle,onClick,title,disable}) {
    return <Pressable style={[styles.button,buttonStyle]} onPress={onClick} disabled={disable}>
        <Text  style={[styles.text,textStyle]}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:THEME.BUTTON_COLOR,
        borderRadius:28,
        width:201,
        paddingVertical:8
    },
    text:{
        padding:0,
        margin:0,
        lineHeight:29,
        color:THEME.TEXT_COLOR,
        fontFamily:'main-regular',
        fontSize:20,
        marginTop:3,
        textAlign:'center',

    }
})