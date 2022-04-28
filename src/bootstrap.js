import * as Font from 'expo-font'

export async function bootstrap() {
    try{
        await Font.loadAsync({
            'main-bold': require('../assets/fonts/Dongle-Bold.ttf'),
            'main-regular': require('../assets/fonts/Dongle-Regular.ttf'),
            'main-light': require('../assets/fonts/Dongle-Light.ttf')
        })
        console.log('Ready boot')
    }catch (e) {
        console.log(e)
    }
}