import React from 'react'
import {View, StyleSheet, TouchableNativeFeedback, Image} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {langTheme} from "../lang/langThemeRu";
import {CustomButton} from "../components/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {actionGetQuestion} from "../redux/game/actions";


export function GameScreen({navigation}) {
    const dispatch = useDispatch()
    const selectedItem = useSelector(state => state.game.selectedItem)
    const mode = useSelector(state => state.mode.selectedMode)
    const questionLen = selectedItem.title.length

    const handleRefreshAction = () =>{
        dispatch(actionGetQuestion(mode.searchName))
    }

    const handleStopGame = () => {
        navigation.navigate('Main')
    }

    const cardStyle = () => {
        if (questionLen >51) {
            return {...styles.card}
        } else {
            return {...styles.card, justifyContent: 'center'}
        }
    }

    const textStyle = () => {
        if (questionLen > 50) {
            return {...styles.question}
        } else {
            return {...styles.question, paddingTop: 0}
        }
    }

    return <View style={styles.container}>
        <View style={cardStyle()}>
            <CustomText text={selectedItem.title} size={22} weight='regular' style={textStyle()}/>
            <CustomButton title={langTheme.DONE} buttonStyle={styles.doneButton}
                          textStyle={styles.doneButtonText}/>
        </View>
        <View style={styles.helpPanel}>
            <TouchableNativeFeedback onPress={() => handleStopGame()}>
                <View style={styles.iconsContainer}>
                    <Image source={require('../../assets/icons/stop.png')}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={handleRefreshAction}>
                <View style={styles.iconsContainer}>
                    <Image source={require('../../assets/icons/restart.png')}/>
                </View>
            </TouchableNativeFeedback>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    doneButton: {
        position: 'absolute',
        bottom: -27,
        backgroundColor: THEME.CARD_COLOR,
        left: '18%',
        borderWidth: 2,
        borderColor: THEME.TEXT_COLOR,
    },
    doneButtonText: {
        lineHeight: 34,
        fontSize: 22
    },
    card: {
        borderRadius: 27,
        width: 316,
        height: 260,
        backgroundColor: THEME.CARD_COLOR,
        borderWidth: 2,
        borderColor: THEME.TEXT_COLOR,
        alignItems: 'center',
        marginBottom: 55
    },
    question: {
        paddingHorizontal: 32,
        paddingTop: 50,
        textAlign: 'center'
    },
    helpPanel: {
        width: '35%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconsContainer: {
        width: 40,
        height: 40,
        backgroundColor: THEME.CARD_COLOR,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
