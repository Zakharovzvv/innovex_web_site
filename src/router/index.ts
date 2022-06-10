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
}

export enum RouteNames{
    HOME='/home',
    SERVICES='/services',
    VALUE='/value',
    BLOG='/blog',
    CAREERS='/careers',
    ABOUT='/about',
    SIGNIN='/signin',
    SIGNUP='/signup',
}

export const publicRoutes: IRoute[]=[
    {path:RouteNames.HOME, element: Home, pageName:"Home" },
    {path:RouteNames.SERVICES, element: Services, pageName:"Services" },
    {path:RouteNames.VALUE, element: Value, pageName:"Value" },
    {path:RouteNames.BLOG, element: Blog, pageName:"Blog" },
    {path:RouteNames.CAREERS, element: Careers, pageName:"Careers" },
    {path:RouteNames.ABOUT, element: About, pageName:"About" },
    {path:RouteNames.SIGNIN, element: SignIn, pageName:"Sign in" },
    {path:RouteNames.SIGNUP, element: SignUp, pageName:"Sig up" },
]

export const privateRoutes: IRoute[]=[
    {path:RouteNames.HOME, element: Home, pageName:"Home" },
    {path:RouteNames.SERVICES, element: Services, pageName:"Services" },
    {path:RouteNames.VALUE, element: Value, pageName:"Value" },
    {path:RouteNames.SIGNIN, element: SignIn, pageName:"Sign in" },
    {path:RouteNames.SIGNUP, element: SignUp, pageName:"Sig up" },
]