import React, {useState} from 'react'
import {View,Text,FlatList,StyleSheet,Keyboard} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {CustomButton} from "../components/CustomButton";
import {langTheme} from "../lang/langThemeRu";
import {PlayerCard} from "../components/PlayerCard";
import {useDispatch, useSelector} from "react-redux";
import {actionAddNewPlayer} from "../redux/players/actions";
import {CustomPlayerInput} from "../components/CustomPlayerInput";



export function MainScreen() {
    const [isMale,setMale] = useState(true)
    const [inputValue,setInputValue] = useState('')


    const players = useSelector(state => state.player.players)
    const dispatch = useDispatch()

    const deleteTempData = () => {
        setMale(true)
        setInputValue('')
    }

    const handleAddPlayer = () => {
        dispatch(actionAddNewPlayer(inputValue,isMale))
        deleteTempData()
        Keyboard.dismiss()
    }

    return <View style={styles.container}>
        <CustomText style={styles.header} size={64} text='#TRUTHORDARE' weight='bold'/>
        <View style={styles.center}>
            <CustomButton disable={!inputValue} textStyle={styles.text} onClick={handleAddPlayer} title={langTheme.ADD_PLAYER}/>
        </View>
        <CustomPlayerInput deleteTempData={deleteTempData} inputValue={inputValue} setInputValue={setInputValue} isMale={isMale} setMale={setMale}/>
            <FlatList
                style={styles.list}
                data={players}
                renderItem={(player) => <PlayerCard player={player.item}/> }
                keyExtractor={player => player.id}
            />
        <View style={styles.center}>
            <CustomButton disable={!players.length} textStyle={styles.text} buttonStyle={styles.playBtn} onClick={() => console.log('eeee')} title={langTheme.PLAY}/>
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME.BACKGROUND_COLOR,
    },
    header:{
        paddingTop:14,
        marginBottom:0,
        textAlign:'center',
        textTransform:'uppercase',
        textShadowColor:'#5F4983',
        textShadowRadius:6,
        textShadowOffset:{width:4,height:6}
},
    center:{
        alignItems:'center'
    },
    list:{
        paddingHorizontal:32,
    },
    playBtn:{
        marginBottom: 20
    }
})