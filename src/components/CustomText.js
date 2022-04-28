import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {THEME} from "../theme/mainTheme";


export function CustomText({size, text, weight}) {
    return <Text style={{
        fontSize: size,
        color: THEME.TEXT_COLOR,
        fontFamily: weight === 'bold' ? 'main-bold' : weight === 'light' ? 'main-light' : 'main-regular'
    }}>{text}</Text>
}