import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from "./reducer";

const enhancer = compose(applyMiddleware(thunkMiddleware));

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Home',],
  blacklist:[]
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);