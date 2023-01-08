import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Main from "./main/Main";
import Direct from "../pages/direct/Direct";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import Registration from "../pages/registration/Registration";
import {AuthContext} from "../components/context/AuthContext";
const AppRouter = () => {

    // const {currentUser} = useContext(AuthContext)

    // const ProtectedRoute: any = ({children}:any) => {
    //     if (!currentUser) {
    //         return <Navigate to="/login" />;
    //     }
    //     return children
    // }

    // console.log(currentUser)
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth)
    console.log(isAuth)
    return (
        <div style={{height: "100%"}}>
            <Routes>
                {/*<Route path="/" element={*/}
                {/*    <ProtectedRoute>*/}
                {/*        <Direct/>*/}
                {/*    </ProtectedRoute>*/}
                {/*}/>*/}
                <Route path="/" element={<Direct />}></Route>
            </Routes>
            <Routes>
                <Route element={<Login/>} path="login"/>
            </Routes>
            <Routes>
                <Route element={<Registration/>} path="/register"/>
            </Routes>
        </div>
    );
};

export default AppRouter;
// <Route  element={<Main/>} path="main" />