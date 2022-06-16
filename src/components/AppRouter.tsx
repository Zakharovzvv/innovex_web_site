import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {IRoute, privateRoutes, initialRoutes, RoutePaths} from '../router';
import Home from "../pages/Home";
import {useTypedSelector} from "../hooks/useTypedSelector";
import SignIn from "../pages/SignIn";

const AppRouter = () => {
//    const {isAuth}=useTypedSelector(state=>state.auth)
    const {isAuth}=useTypedSelector(state=>state.authSlice)
    const [routes,setRoutes]=useState<IRoute[]>([])


    useEffect(() => {
        //  setPages(isAuth ? publicRoutes : privateRoutes)
        setRoutes(isAuth ? initialRoutes :initialRoutes.filter(rote =>rote.isPrivate!=true))
    }, [isAuth])

    return (
        <Routes>
            <Route index element={<Home/>}/>
            {routes.map(route=>
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            )}
       </Routes>
    // isAuth
    //     ?
    //         <Routes>
    //             <Route index element={<Home/>}/>
    //             {privateRoutes.map(route=>
    //                  <Route key={route.path} path={route.path} element={<route.element/>}/>
    //             )}
    //             <Route path={RouteNames.SIGNIN} element={<SignIn/>}/>
    //         </Routes>
    //         :
    //         <Routes>
    //             <Route index element={<Home/>}/>
    //             {publicRoutes.map(route=>
    //                 <Route key={route.path} path={route.path} element={<route.element/>}/>
    //             )}
    //         </Routes>

    );
};

export default AppRouter;