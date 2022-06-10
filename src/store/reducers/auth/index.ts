import {AuthActions, AuthActionsEnum, IAuthState} from "./types";

const initialState: IAuthState = {
    isAuth: false
}

export default function authReducer(state = initialState, action: AuthActions): IAuthState {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state;
    }

}