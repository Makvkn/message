import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Main from "./main/Main";
import Direct from "../pages/direct/Direct";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const AppRouter = () => {
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth)
    console.log(isAuth)
    return (
        <div>
            {!isAuth ?
                <Routes>
                    <Route path="/" element={<Direct/>} index/>
                </Routes> :
                <Routes>
                    <Route  element={<Login/>} path="/" />
                </Routes>}
        </div>
    );
};

export default AppRouter;
// <Route  element={<Main/>} path="main" />