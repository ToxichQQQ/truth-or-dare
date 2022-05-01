import React from 'react'
import {View, StyleSheet} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {langTheme} from "../lang/langThemeRu";
import {CustomButton} from "../components/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAction, actionGetQuestion} from "../redux/game/actions";


export function CardScreen({navigation}) {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode.selectedMode)



    const handleGetQuestion = async () => {
       await dispatch(actionGetQuestion(mode.searchName))
        await navigation.navigate('Game')
    }

    const handleGetAction = async () => {
       await dispatch(actionGetAction(mode.searchName))
        await navigation.navigate('Game')
    }


    return <View style={styles.container}>
        <View style={styles.card}>
            <CustomText text='Валерия' size={36} weight='regular' style={styles.name}/>
            <CustomText text={langTheme.YOUR_TURN} size={18} weight='regular' style={styles.helperText}/>
            <View style={styles.buttonsContainer}>
                <CustomButton title={langTheme.TRUTH} buttonStyle={styles.button} textStyle={styles.buttonText} onClick={handleGetQuestion}/>
                <CustomButton title={langTheme.DARE} buttonStyle={styles.button} textStyle={styles.buttonText} onClick={handleGetAction}/>
            </View>
            <CustomButton title={langTheme.RANDOM_CHOICE} buttonStyle={styles.randomButton}
                          textStyle={styles.randomButtonText}/>
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
    card: {
        borderRadius: 27,
        width: 316,
        height: 332,
        backgroundColor: THEME.CARD_COLOR,
        borderWidth: 2,
        borderColor: THEME.TEXT_COLOR,
    },
    name: {
        paddingTop: 40,
        textShadowColor: '#5F4983',
        textShadowRadius: 10,
        textAlign: 'center',
        textShadowOffset: {width: 4, height: 6}
    },
    helperText: {
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 50
    },
    button: {
        width: 135
    },
    buttonText: {
        fontSize: 18,
        textShadowColor: '#5F4983',
        textShadowRadius: 10,
        textTransform: 'uppercase',
        fontFamily: 'main-bold',
        textShadowOffset: {width: 4, height: 6}
    },
    randomButton: {
        position: 'absolute',
        bottom: -27,
        backgroundColor: THEME.CARD_COLOR,
        left: '18%',
        borderWidth: 2,
        borderColor: THEME.TEXT_COLOR,
    },
    randomButtonText: {
        fontSize: 18
    }
})
