import React, {useEffect} from 'react'
import {FlatList,View,Text,StyleSheet} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {langTheme} from "../lang/langThemeRu";
import {useDispatch, useSelector} from "react-redux";
import {ModeCard} from "../components/ModeCard";
import {actionGetRandomPlayer} from "../redux/players/actions";


export function ModeScreen({navigation}) {
    const gameModes = useSelector(state => state.mode.gameModes)
    const dispatch = useDispatch()

    const handleSelectMode = () => {
        dispatch(actionGetRandomPlayer())
        navigation.navigate('Card')
    }

    return <View style={styles.container}>
        <CustomText style={styles.header} size={24} weight='regular' text={langTheme.CHOOSE_GAME_MODE}/>
        <FlatList
            style={styles.list}
            data={gameModes}
            renderItem={({item}) => <ModeCard mode={item} nextScreen={handleSelectMode}/> }
            keyExtractor={(mode) => mode.id}
        />
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME.BACKGROUND_COLOR,
    },
    header:{
        lineHeight:34,
        paddingTop:45,
        textAlign:'center'
    },
    list:{
        paddingHorizontal:18,
        marginBottom:40
    }
})