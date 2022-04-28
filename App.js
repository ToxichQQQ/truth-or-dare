import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {MainScreen} from "./src/screens/MainScreen"
import AppLoading from 'expo-app-loading'
import {bootstrap} from "./src/bootstrap";

export default function App() {
  const [isReady,setReady] = useState(false)

  if (!isReady){
    return <AppLoading
    startAsync={bootstrap}
    onFinish={() => setReady(true)}
    onError={(e) => console.log(e)}
    />
  }

  return <MainScreen/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
