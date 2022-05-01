import React, {useState} from 'react'
import {View,TextInput ,StyleSheet, Image, TouchableNativeFeedback} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {langTheme} from "../lang/langThemeRu";
import {useDispatch} from "react-redux";


export function CustomPlayerInput({isMale,setMale,inputValue,setInputValue,deleteTempData}) {
    const dispatch = useDispatch()

    let image = require('../../assets/icons/icon_boy.png')


    if (!isMale) {
        image = require('../../assets/icons/icon_girl.png')
    }

    const changeSex = () => {
        setMale(prevState => !prevState)
    }

    return <View style={styles.container}>
    <View style={styles.card}>
        <TouchableNativeFeedback onPress={changeSex}>
        <Image style={styles.img} source={image}/>
        </TouchableNativeFeedback>
        <TextInput placeholderTextColor={THEME.TEXT_COLOR} placeholder={langTheme.TYPE_PLAYER_NAME} style={styles.input} value={inputValue} onChangeText={setInputValue}/>
        <TouchableNativeFeedback onPress={deleteTempData}>
            <Image style={styles.delIcon} source={require('../../assets/delete_icon.png')}/>
        </TouchableNativeFeedback>
    </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
      paddingHorizontal:32
    },
    card:{
        width:'100%',
        backgroundColor:THEME.SECONDARY_COLOR,
        borderRadius:5,
       paddingBottom:3,
        marginTop:30,
    },
    input:{
        position:'absolute',
        left:'15%',
        marginTop:7,
        color:THEME.TEXT_COLOR,
        fontSize:15,
        fontFamily:'main-regular'
    },
    img:{
        marginTop: 3,
        width:30,
        height:30,
        marginLeft:10,
    },
    delIcon:{
        top:'40%',
        right:10,
        position:'absolute'
    }
})