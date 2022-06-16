import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/auth/authSlice";

const rootReducer=combineReducers(reducers)
// const rootReducer=combineReducers({
//     authSlice
// })



//export const store =createStore(rootReducer, applyMiddleware(thunk))

export const setupStore=()=>{
    return configureStore({
        reducer:rootReducer
    })
}

//export type RootState =ReturnType<typeof store.getState>
export type RootState =ReturnType<typeof rootReducer>
export type AppStore =ReturnType<typeof setupStore>
//export type AppDispatch =typeof store.dispatch
export type AppDispatch =AppStore['dispatch']
