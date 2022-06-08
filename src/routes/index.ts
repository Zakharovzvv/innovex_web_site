import Home from "../pages/Home";
import Services from "../pages/Services";
import Value from "../pages/Value";
import React, {FC, ReactNode} from "react";
import Blog from "../pages/Blog";
import Careers from "../pages/Careers";
import About from "../pages/About";

export interface IRoute{
    path:string,
    element:React.ComponentType
}

export enum RouteNames{
    HOME='/',
    SERVICES='/services',
    VALUE='/value',
    BLOG='/blog',
    CAREERS='/careers',
    ABOUT='/about',
    LOGIN='/login',
    REGISTER='/register',
}

export const publicRoutes: IRoute[]=[
    {path:RouteNames.HOME, element: Home },
    {path:RouteNames.SERVICES, element: Services },
    {path:RouteNames.VALUE, element: Value },
    {path:RouteNames.BLOG, element: Blog },
    {path:RouteNames.CAREERS, element: Careers },
    {path:RouteNames.ABOUT, element: About },
    {path:RouteNames.LOGIN, element: About },
    {path:RouteNames.REGISTER, element: About },
]

export const privateRoutes: IRoute[]=[
    {path:RouteNames.HOME, element: Home },
    {path:RouteNames.SERVICES, element: Services },
    {path:RouteNames.VALUE, element: Value },
    {path:RouteNames.BLOG, element: Blog },
    {path:RouteNames.CAREERS, element: Careers },
    {path:RouteNames.ABOUT, element: About },
    {path:RouteNames.LOGIN, element: About },
    {path:RouteNames.REGISTER, element: About },

]