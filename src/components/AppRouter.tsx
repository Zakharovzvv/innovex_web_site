import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from '../router';
import Home from "../pages/Home";
import {useTypedSelector} from "../hooks/useTypedSelector";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
    const {isAuth}=useTypedSelector(state=>state.auth)
    return (
        isAuth
        ?
            <Routes>
                <Route index element={<Home/>}/>
                {privateRoutes.map(route=>
                     <Route key={route.path} path={route.path} element={<route.element/>}/>
                )}
                <Route path={RouteNames.SIGNIN} element={<SignIn/>}/>
            </Routes>
            :
            <Routes>
                <Route index element={<Home/>}/>
                {publicRoutes.map(route=>
                    <Route key={route.path} path={route.path} element={<route.element/>}/>
                )}
            </Routes>

    );
};

export default AppRouter;