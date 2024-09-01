// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Movies from './Movies';
import CompanyInfo from './CompanyInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/company-info" element={<CompanyInfo />} />
            </Routes>
        </Router>
    );
}

export default App;
