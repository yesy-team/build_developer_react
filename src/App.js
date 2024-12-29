import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/member/LoginPage";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/react/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
