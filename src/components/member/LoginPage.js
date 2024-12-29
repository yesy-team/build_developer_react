import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginPage = () => {
    return (
        <div>
            <h1>로그인 페이지</h1>
            <p>구글로그인:</p>
            <GoogleLoginButton />
        </div>
    );
};

export default LoginPage;
