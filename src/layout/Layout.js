import React from 'react';
import {Route, Routes} from "react-router-dom";
import Calculator from "../views/calculator/Calculator";
import History from "../views/history/History";
import Header from "./header/Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Calculator/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
        </div>
    );
};

export default Layout;