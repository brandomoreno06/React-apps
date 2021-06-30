import { useState } from "react";
import "./LoginForm.css"
import Card from "../UI/Card";

const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const [password, setPassword] = useState(""); 
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const registerClickHandler = () => props.isRegisterClick(true);
    
    const loginHandler = (e) => {
        e.preventDefault();
        const foundUser = props.registeredAccounts.find(user => (user.username === username))
        if (foundUser && foundUser.password === password) {
            props.loginSucessHandler(true);
        }
    }


    return(
        <Card className="login-form">
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <div className="user-input"> 
                    <label>Username</label>
                    <input type="text" value={username} onChange={usernameChangeHandler} placeholder="Username" />
                </div>
                <div className="user-input">
                    <label>Password</label>
                    <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Password"/>
                </div>
                <div className="user-input">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="register-now">No account yet? <span onClick={registerClickHandler}>Register Now!</span></div>
        </Card>
    );
};

export default LoginForm;