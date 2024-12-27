// GoogleLoginButton.js

import React from "react";

const GoogleLoginButton = () => {
    const googleLogin = () => {
        console.log("%c[INFO] Google 로그인 시도 중...", "color: blue");
        const backendUrl =
            process.env.REACT_APP_BACKEND_URL || "localhost:8030";
        console.log(process.env.REACT_APP_BACKEND_URL);
        window.location.href = `${backendUrl}/oauth2/authorization/google`; // Google OAuth2 로그인 경로
    };

    return (
        <button
            onClick={googleLogin}
            className="google-login-button"
        >
            <div className="bc-logo">
                <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    className="google-logo"
                    alt="Google logo"
                />
            </div>
            <span className="login-text">Sign in with Google</span>
        </button>
    );
};

export default GoogleLoginButton;