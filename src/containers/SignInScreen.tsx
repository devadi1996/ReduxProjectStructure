import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { updateSignIn } from "../modules/Auth/Action";
const SignInScreen = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(updateSignIn('token'))
                }}
                style={{ width: 200, height: 100, backgroundColor: 'skyblue' }}>
                <Text>SignIn</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SignInScreen
