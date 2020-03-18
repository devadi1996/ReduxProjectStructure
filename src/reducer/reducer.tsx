import { combineReducers } from 'redux';
import Home from "../modules/Home/Reducer";
import Auth from "../modules/Auth/Reducer";
export default combineReducers({
    Home,
    Auth
})