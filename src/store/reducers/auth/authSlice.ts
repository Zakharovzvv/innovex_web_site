import {IAuthState} from "./types";
import {IUser} from "../../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthActionCreators} from "./authActionCreators";
import {AuthAsyncActionCreators} from "./authAsyncActionCreators";

const initialState: IAuthState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: {} as IUser
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        authAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        // authLoading(state, action: PayloadAction<boolean>) {
        //     state.isLoading = action.payload
        // },
        // authFetchingSuccess(state, action: PayloadAction<IUser>) {
        //     state.isLoading = false
        //     state.isAuth = true
        //     state.error = ''
        //     state.user = action.payload
        // },
        // authFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        [AuthAsyncActionCreators.login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.isAuth = true
            state.error = ''
            state.user = action.payload
        },
        [AuthAsyncActionCreators.login.pending.type]: (state) => {
            state.isLoading = true
        },
        [AuthAsyncActionCreators.login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default authSlice.reducer