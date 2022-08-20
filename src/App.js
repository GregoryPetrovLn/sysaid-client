import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "./views/login-page/LoginPage";
import Calculator from "./views/calculator/Calculator";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/" element={<Calculator/>}/>
                <Route path="/history" element={null}/>
            </Routes>
        </div>
    );
};

export default App;