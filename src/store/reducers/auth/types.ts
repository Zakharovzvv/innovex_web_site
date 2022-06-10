export interface IAuthState {
    isAuth:boolean
}

export enum AuthActionsEnum{
    SET_AUTH ='SET_AUTH'
}

export interface ISetAuthActions {
    type:AuthActionsEnum.SET_AUTH;
    payload:boolean;
}

export type AuthActions=
    ISetAuthActions