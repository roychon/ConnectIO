import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const passwordConfirm = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordConfirm.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords don't match");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post(
                    "http://localhost:8800/api/auth/register",
                    user
                );
                navigate("/login");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">ConnectIO</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on
                        ConnectIO.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input
                            placeholder="Username"
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            ref={email}
                            type="email"
                            className="loginInput"
                        />
                        <input
                            placeholder="Password"
                            ref={password}
                            type="password"
                            className="loginInput"
                        />
                        <input
                            placeholder="Confirm Password"
                            ref={passwordConfirm}
                            type="password"
                            className="loginInput"
                        />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
