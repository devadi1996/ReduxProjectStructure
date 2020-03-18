import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import {updateUid} from '../modules/Home/Action'
import { updateSignout} from "../modules/Auth/Action";
const HomeScreen = (props: any) => {
    const { uid, email, password, token } = useSelector((state: {
        Home: any
    }) => ({
        uid: state.Home.uid,
        email: state.Home.email,
        password: state.Home.password,
        token: state.Home.token
    }));
    // const data = useSelector(store => console.log(store))
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

              <TouchableOpacity onPress={()=>{
                  dispatch(updateSignout())
              }} style={{position:'absolute',top:10,right:10}}>
                  <Text style={{color:'blue'}}>Sign Out</Text>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => {
               dispatch(updateUid('0101010101'))
            }}
                style={{ height: 100, width: 150, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Text>{uid}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
