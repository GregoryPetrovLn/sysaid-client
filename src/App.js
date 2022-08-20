import React from 'react';
import {Routes, Route} from "react-router-dom";
import LoginPage from "./views/login-page/LoginPage";
import Layout from "./layout/Layout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<Layout/>}/>
            </Routes>
        </div>
    );
};

export default App;