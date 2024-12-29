// // LoginCallbackHandler.js
//
// import { useNavigate } from "react-router-dom";
// import React, { useEffect } from "react";
//
// const LoginCallbackHandler = () => {
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const backendUrl = process.env.REACT_APP_BACKEND_URL || "localhost:8030";
//         fetch(`${backendUrl}/oauth2/status`, {
//             method: "GET",
//             credentials: "include", // 쿠키 포함
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     return response.json().then((err) => {
//                         throw new Error(err.message || "Login failed");
//                     });
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Authenticated successfully:", data);
//                 navigate("/main");
//             })
//             .catch((err) => {
//                 console.error("Error during authentication:", err.message);
//                 alert("Login failed. Please try again.");
//             });
//     }, [navigate]);
//
//     return <div>Processing login...</div>;
// };
//
// export default LoginCallbackHandler;

