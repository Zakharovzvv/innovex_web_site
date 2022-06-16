import React, {FC, useEffect} from 'react';
import './App.sass';
import AppRouter from "./components/AppRouter";
import {useActions} from './hooks/useActions';
import {IUser} from './models/IUser';


const App: FC = () => {
    const {setUser, setAuth} = useActions()
    useEffect(() => {
        const user = localStorage.getItem('auth' || '')
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setAuth(true)
        }
    }, [])
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
