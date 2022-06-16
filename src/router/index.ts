import Home from "../pages/Home";
import Services from "../pages/Services";
import Value from "../pages/Value";
import React from "react";
import Blog from "../pages/Blog";
import Careers from "../pages/Careers";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export interface IRoute{
    path:string,
    element:React.ComponentType,
    pageName:string,
    isPrivate?:boolean,
    isMainMenu?:boolean,
}

export enum RoutePaths{
    HOME='/home',
    SERVICES='/services',
    VALUE='/value',
    BLOG='/blog',
    CAREERS='/careers',
    ABOUT='/about',
    SIGNIN='/signin',
    SIGNUP='/signup',
}

export const initialRoutes: IRoute[]=[
    {path:RoutePaths.HOME, element: Home, pageName:"Home", },
    {path:RoutePaths.SERVICES, element: Services, pageName:"Services" },
    {path:RoutePaths.VALUE, element: Value, pageName:"Value" },
    {path:RoutePaths.BLOG, element: Blog, pageName:"Blog" },
    {path:RoutePaths.CAREERS, element: Careers, pageName:"Careers" },
    {path:RoutePaths.ABOUT, element: About, pageName:"About", isPrivate:true},
    {path:RoutePaths.SIGNIN, element: SignIn, pageName:"Sign in",isMainMenu:false},
    {path:RoutePaths.SIGNUP, element: SignUp, pageName:"Sig up",isMainMenu:false },
]

export const privateRoutes: IRoute[]=[
]