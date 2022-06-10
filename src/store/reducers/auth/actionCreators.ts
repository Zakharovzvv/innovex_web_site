import { IUser } from "../../../models/IUser";
import {AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetIsLoadingAction, ISetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators={
    setUser:(user:IUser):ISetUserAction=>({type:AuthActionsEnum.SET_USER,payload:user}),
    setIsAuth:(isAuth:boolean):ISetAuthAction=>({type:AuthActionsEnum.SET_AUTH,payload:isAuth}),
    setIsLoading:(payload:boolean):ISetIsLoadingAction=>({type:AuthActionsEnum.SET_IS_LOADING,payload}),
    setError:(payload:string):ISetErrorAction=>({type:AuthActionsEnum.SET_ERROR,payload}),
    login:(username:string,password:string)=>async (dispatch:AppDispatch)=>{
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async ()=>{
                const response =await axios.get<IUser[]>('./users.json')
                const user = response.data.find(user=>user.username===username && user.password===password)
                if (user){
                    localStorage.setItem('auth','true')
                    localStorage.setItem('username',user.username)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(user))
                }else {
                    dispatch(AuthActionCreators.setError('Wrong password or login'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))

            },1000)
         }catch (e) {
            dispatch(AuthActionCreators.setIsLoading(false))
            dispatch(AuthActionCreators.setError("Error loading users from server"))

        }

    },
    logout:()=> (dispatch:AppDispatch)=>{
                    localStorage.removeItem('auth')
                    localStorage.removeItem('username')
                    dispatch(AuthActionCreators.setIsAuth(false))
                    dispatch(AuthActionCreators.setUser({} as IUser))
    }
}