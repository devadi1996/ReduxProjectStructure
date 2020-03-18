import { UPDATE_SIGN_IN, UPDATE_SIGNOUT, UPDATE_SPLASH } from './Type'


export const updateSplash = () => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_SPLASH, payload: {} });
    }
}
export const updateSignIn = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_SIGN_IN, payload: { data: value } });
    }
}
export const updateSignout = () => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_SIGNOUT, payload: {  } });
    }
}