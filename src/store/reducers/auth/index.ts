import { IUser } from "../../../models/IUser";
import {AuthActions, AuthActionsEnum, IAuthState} from "./types";

const initialState: IAuthState = {
    isAuth: false,
    error:"",
    isLoading: false,
    user:{} as IUser
}

export default function authReducer(state = initialState, action: AuthActions): IAuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload,isLoading: false}
        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading:false}
        case AuthActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}

        default:
            return state;
    }

}