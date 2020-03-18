import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './containers/HomeScreen'
import SplashScreen from "./containers/SplashScreen";
import SignInScreen from "./containers/SignInScreen";
import { connect } from 'react-redux'
const Stack = createStackNavigator();
interface Props {
    store: any
}
export class Navigation extends Component<Props> {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        this.props.store.isLoading ? (
                            <Stack.Screen name="Splash" component={SplashScreen} options={{ header: () => null }} />
                        ) : this.props.store.userToken == null ?
                                (
                                    // No token found, user isn't signed in
                                    <Stack.Screen
                                        name="SignIn"
                                        component={SignInScreen}
                                        options={{
                                            title: 'Sign in',
                                            // When logging out, a pop animation feels intuitive
                                            // animationTypeForReplace: this.props.store.isSignout ? 'pop' : 'push',
                                            animationEnabled: false
                                        }}
                                    />
                                ) : (
                                    // User is signed in
                                    <Stack.Screen name="Home" component={HomeScreen} />
                                )
                    }
                </Stack.Navigator>

            </NavigationContainer>
        )
    }
}
const mapStateToProps = (state: any) => ({
    store: state.Auth
})

const mapDispatchToProps = (dispatch: any) => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Navigation) 
