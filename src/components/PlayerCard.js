import React from 'react'
import {View,Text,StyleSheet,Image,TouchableNativeFeedback} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "./CustomText";
import {useDispatch} from "react-redux";
import {actionDeletePlayer} from "../redux/players/actions";


export function PlayerCard({player}){
    let image = require('../../assets/icon_boy.png')
    const dispatch = useDispatch()


    if (!player.isMale) {
        image = require('../../assets/icon_girl.png')
    }

    const handleDeletePlayer = () => {
        dispatch(actionDeletePlayer(player.id))
    }

    return <View style={styles.card}>
        <Image style={styles.img} source={image}/>
        <CustomText size={15} text={player.name} weight='light' style={styles.cardText}/>
        <TouchableNativeFeedback onPress={handleDeletePlayer}>
        <Image style={styles.delIcon} source={require('../../assets/delete_icon.png')}/>
        </TouchableNativeFeedback>
    </View>
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        width:'100%',
        backgroundColor:THEME.SECONDARY_COLOR,
        borderRadius:5,
        paddingVertical:3,
        marginTop:30,
    },
    cardText:{
        textAlign: 'center',
        position:'absolute',
        top:'40%',
        left:'15%'
    },
    img:{
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