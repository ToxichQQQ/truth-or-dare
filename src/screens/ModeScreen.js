import React from 'react'
import {FlatList,View,Text,StyleSheet} from 'react-native'
import {THEME} from "../theme/mainTheme";
import {CustomText} from "../components/CustomText";
import {langTheme} from "../lang/langThemeRu";
import {useSelector} from "react-redux";
import {ModeCard} from "../components/ModeCard";


export function ModeScreen() {
    const gameModes = useSelector(state => state.mode.gameModes)


    return <View style={styles.container}>
        <CustomText style={styles.header} size={24} weight='regular' text={langTheme.CHOOSE_GAME_MODE}/>
        <FlatList
            style={styles.list}
            data={gameModes}
            renderItem={({item}) => <ModeCard mode={item}/> }
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