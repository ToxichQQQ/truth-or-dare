import React from 'react'
import {View, StyleSheet, TouchableNativeFeedback, Image} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {langTheme} from "../lang/langThemeRu";
import {CustomButton} from "../components/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {actionRefreshItem} from "../redux/game/actions";
import {actionGetRandomPlayer} from "../redux/players/actions";


export function GameScreen({navigation}) {
    const dispatch = useDispatch()
    const selectedItem = useSelector(state => state.game.selectedItem)
    const mode = useSelector(state => state.mode.selectedMode)
    const players = useSelector(state => state.player.players)
    const player = useSelector(state => state.player.currentPlayer)

    const handleRefreshAction = () =>{
        dispatch(actionRefreshItem(mode.searchName,players,player))
    }

    const handleStopGame = () => {
        (() => {
            navigation.navigate('Main')
        })()
    }

    const handleDoneItem = () => {
        dispatch(actionGetRandomPlayer())
        navigation.navigate('Card')
    }


    return <View style={styles.container}>
        <View style={styles.card}>
            <CustomText text={selectedItem.title} size={22} weight='regular' style={styles.question}/>
            <CustomButton title={langTheme.DONE} buttonStyle={styles.doneButton}
                          textStyle={styles.doneButtonText} onClick={handleDoneItem}/>
        </View>
        <View style={styles.helpPanel}>
            <TouchableNativeFeedback onPress={handleStopGame}>
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
