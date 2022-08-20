import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./views/login-page/LoginPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/calculator" element={null} />
            </Routes>
        </div>
    );
};

export default App;