import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Main from "./main/Main";
import Direct from "./direct/Direct";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/direct" element={<Direct />} />
            </Routes>
        </div>
    );
};

export default AppRouter;