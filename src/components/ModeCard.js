import React from "react";
import {View,TouchableNativeFeedback, Text,StyleSheet,Image} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "./CustomText";
import {useDispatch} from "react-redux";
import {actionChooseMode} from "../redux/gamemode/actions";

export function ModeCard({mode}) {
    const dispatch = useDispatch()

    const handleChooseMode = () => {
        dispatch(actionChooseMode(mode.id))
    }

    return (
        <TouchableNativeFeedback onPress={handleChooseMode}>
            <View style={styles.card}>
                <Image source={mode.icon} style={styles.icon}/>
                <View style={styles.cardText}>
                    <CustomText text={mode.title} size={30} weight='regular' style={styles.cardTitle}/>
                    <CustomText text={mode.desc} size={11} weight='regular'/>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}


const styles = StyleSheet.create({
    card:{
        flex:1,
        width:'100%',
        backgroundColor:THEME.SECONDARY_COLOR,
        borderRadius:10,
        paddingVertical:3,
        marginTop:45,
    },
    icon:{
        position:'absolute',
        top:5,
        left:5
    },
    cardText:{
        paddingLeft:70,
        paddingBottom:3
    },
    cardTitle:{
        textShadowColor:'#5F4983',
        textShadowRadius:6,
        textShadowOffset:{width:4,height:6}
    }
})