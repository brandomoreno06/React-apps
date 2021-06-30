import { useState } from "react";
import "./UserRegistration.css"
import Card from "../UI/Card";
import UserInput from "./UserInput";

const UserRegistration = (props) => {
    const [user, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        username: "",
        password: ""
    });

    const changeHandler = (event) => {
        const value = event.target.value;
        setUserInfo({...user, [event.target.name]: value})
    }

    const registerClickHandler = () => props.isRegisterCancel(false)

    const submitHandler = (e) => {
        e.preventDefault();

        const userData ={
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            contact: user.contact,
            username: user.username,
            password: user.password
        };

        props.onSubmitRegister(userData);
        setUserInfo({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            username: "",
            password: ""
        })
    }


    return(
        <Card className="registration-form">
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div className="name">
                    <UserInput type="name" name="firstName" value={user.firstName} onChange={changeHandler} placeholder="First Name" />
                    <UserInput type="text" name="lastName" value={user.lastName} onChange={changeHandler} placeholder="Last Name" />
                </div>
                
                <UserInput type="email" name="email" value={user.email} onChange={changeHandler} placeholder="Email Address"/>
                
                <UserInput type="number" name="contact" value={user.contact} onChange={changeHandler} placeholder="Contact Number"/>
                
                <UserInput type="text" name="username"  value={user.username} onChange={changeHandler} placeholder="Username" />
                
                <UserInput type="password" name="password" value={user.password} onChange={changeHandler} placeholder="Password"/>

                <div className="user-input">
                    <button type="button" onClick={registerClickHandler}>Cancel</button>
                    <button type="submit">Register</button>
                </div>
            </form>
    
        </Card>
    );
};
    

export default UserRegistration;