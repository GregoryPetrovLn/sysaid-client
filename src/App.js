import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={null} />
                <Route path="/calculator" element={null} />
            </Routes>
        </div>
    );
};

export default App;