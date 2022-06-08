import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../routes';
import Home from "../pages/Home";

const AppRouter = () => {
    const isAuth=true
    return (
        isAuth
        ?
            <Routes>
                <Route index element={<Home/>}/>
                {privateRoutes.map(route=>
                     <Route key={route.path} path={route.path} element={<route.element/>}/>
                )}
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