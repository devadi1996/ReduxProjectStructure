import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from "react-redux";
import { updateSplash } from '../modules/Auth/Action'



const SplashScreen = () => {

    const dispatch = useDispatch()
    React.useEffect(() => {
        // debugger

        setTimeout(() => {
            dispatch(updateSplash())
            
        }, 2000);
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                {'Splash Screen'}
            </Text>
        </SafeAreaView>
    )
}

export default SplashScreen
