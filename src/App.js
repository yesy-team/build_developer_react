import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import LoginPage from "./components/member/LoginPage";
import "./App.css";
// import LoginCallbackHandler from "./components/member/LoginCallbackHandler";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/main" />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/*<Route path="/login/oauth2/code/google" element={<LoginCallbackHandler />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
