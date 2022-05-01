import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {MainScreen} from "./src/screens/MainScreen"
import AppLoading from 'expo-app-loading'
import {bootstrap} from "./src/bootstrap";
import {Provider} from "react-redux";
import {store} from "./src/redux";
import {ModeScreen} from "./src/screens/ModeScreen";
import {CardScreen} from "./src/screens/CardScreen";
import {GameScreen} from "./src/screens/GameScreen";

export default function App() {
  const [isReady,setReady] = useState(false)

  if (!isReady){
    return <AppLoading
    startAsync={bootstrap}
    onFinish={() => setReady(true)}
    onError={(e) => console.log(e)}
    />
  }

  return <Provider store={store}><GameScreen/></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
