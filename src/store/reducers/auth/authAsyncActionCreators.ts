import {createAsyncThunk} from "@reduxjs/toolkit";
import userService from "../../../components/api/userService";

export const AuthAsyncActionCreators ={
    login: createAsyncThunk('auth/login', async ({username, password}:{username:string,password:string}, thunkAPI) => {
        try {
            //  dispatch(authSlice.actions.authLoading(true))
            setTimeout(async () => {
                const response = await userService.getUsers()
                const user = response.data.find(user => user.username === username && user.password === password)
                if (user) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', user.username)
                    //               dispatch(authSlice.actions.authFetchingSuccess(user))
                } else {
                    throw 'Wrong password or login'
                }
                //               dispatch(authSlice.actions.authLoading(false))
                return user;
            }, 1000)
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
//            return thunkAPI.rejectWithValue("Error loading users from server")
            // dispatch(authSlice.actions.authLoading(false))
            // dispatch(authSlice.actions.authFetchingError("Error loading users from server"))

        }

    }),

}