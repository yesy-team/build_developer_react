import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to="/react/login">
                <button>로그인하러가기 그냥 클릭✔️</button>
            </Link>
        </div>
    );
};

export default MainPage;
