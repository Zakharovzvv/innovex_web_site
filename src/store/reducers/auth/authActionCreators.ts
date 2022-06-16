import {IUser} from "../../../models/IUser";
import {AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetIsLoadingAction, ISetUserAction} from "./types";
import {AppDispatch} from "../../store";
import axios from "axios";
import userService from "../../../components/api/userService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {authSlice} from "./authSlice";

export const AuthActionCreators = {
    setUser: (user: IUser) => async (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.authUser(user))
    },
    setAuth: (isAuth: boolean) => async (dispatch: AppDispatch) => {
        dispatch(authSlice.actions.authAuth(isAuth))
    },
     //  login:(username:string,password:string)=>async (dispatch:AppDispatch)=>{
    //     try {
    //         dispatch(authSlice.actions.authLoading(true))
    //         setTimeout(async ()=>{
    //             const response =await userService.getUsers()
    //             const user = response.data.find(user=>user.username===username && user.password===password)
    //             if (user){
    //                 localStorage.setItem('auth','true')
    //                 localStorage.setItem('username',user.username)
    //                 dispatch(authSlice.actions.authFetchingSuccess(user))
    //             }else {
    //                 dispatch(authSlice.actions.authFetchingError('Wrong password or login'))
    //             }
    //             dispatch(authSlice.actions.authLoading(false))
    //
    //         },1000)
    //      }catch (e) {
    //         dispatch(authSlice.actions.authLoading(false))
    //         dispatch(authSlice.actions.authFetchingError("Error loading users from server"))
    //
    //     }
    //
    // },
    logout: () => (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(authSlice.actions.authAuth(false))
        dispatch(authSlice.actions.authUser({} as IUser))
    }
    // setUser:(user:IUser):ISetUserAction=>({type:AuthActionsEnum.SET_USER,payload:user}),
    // setIsAuth:(isAuth:boolean):ISetAuthAction=>({type:AuthActionsEnum.SET_AUTH,payload:isAuth}),
    // setIsLoading:(payload:boolean):ISetIsLoadingAction=>({type:AuthActionsEnum.SET_IS_LOADING,payload}),
    // setError:(payload:string):ISetErrorAction=>({type:AuthActionsEnum.SET_ERROR,payload}),
    // login:(username:string,password:string)=>async (dispatch:AppDispatch)=>{
    //     try {
    //         dispatch(AuthActionCreators.setIsLoading(true))
    //         setTimeout(async ()=>{
    //             const response =await userService.getUsers()
    //             const user = response.data.find(user=>user.username===username && user.password===password)
    //             if (user){
    //                 localStorage.setItem('auth','true')
    //                 localStorage.setItem('username',user.username)
    //                 dispatch(AuthActionCreators.setUser(user))
    //                 dispatch(AuthActionCreators.setIsAuth(true))
    //             }else {
    //                 dispatch(AuthActionCreators.setError('Wrong password or login'))
    //             }
    //             dispatch(AuthActionCreators.setIsLoading(false))
    //
    //         },1000)
    //      }catch (e) {
    //         dispatch(AuthActionCreators.setIsLoading(false))
    //         dispatch(AuthActionCreators.setError("Error loading users from server"))
    //
    //     }
    //
    // },
    // logout:()=> (dispatch:AppDispatch)=>{
    //                 localStorage.removeItem('auth')
    //                 localStorage.removeItem('username')
    //                 dispatch(AuthActionCreators.setIsAuth(false))
    //                 dispatch(AuthActionCreators.setUser({} as IUser))
    // }
}