import { AuthActionCreators } from "./auth/authActionCreators";
import {AuthAsyncActionCreators} from "./auth/authAsyncActionCreators";

export const allActionCreators={
    ...AuthActionCreators,
    ...AuthAsyncActionCreators
}