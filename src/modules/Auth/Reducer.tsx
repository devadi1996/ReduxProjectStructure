import { UPDATE_SIGN_IN, UPDATE_SIGNOUT, UPDATE_SPLASH } from './Type'
const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_SPLASH:
            return { ...state, isLoading: false }
        case UPDATE_SIGN_IN:
            return { ...state, userToken: action.payload.data, isSignout: false }
        case UPDATE_SIGNOUT:
            return { ...state, isSignout: true, userToken: null }
        default:
            return state
    }
}

export default Reducer;