import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {MainScreen} from "./src/screens/MainScreen"
import AppLoading from 'expo-app-loading'
import {bootstrap} from "./src/bootstrap";
import {Provider} from "react-redux";
import {store} from "./src/redux";

export default function App() {
  const [isReady,setReady] = useState(false)

  if (!isReady){
    return <AppLoading
    startAsync={bootstrap}
    onFinish={() => setReady(true)}
    onError={(e) => console.log(e)}
    />
  }

  return <Provider store={store}><MainScreen/></Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
