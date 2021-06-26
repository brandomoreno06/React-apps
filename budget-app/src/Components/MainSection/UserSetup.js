import { useState } from "react";
import "./UserSetup.css";
import LoginForm from "../Login/LoginForm";
import UserRegistration from "../Login/UserRegistration";



const UserSetup = (props) => {

    const [isRegister, setIsRegister] = useState(false);
    const registerFormHandler = (isClicked) => {
        setIsRegister(isClicked);
    };

    const submitRegisterHandler = (userData) => {
        const user = {...userData, id: userData.username};
        props.onSucessfulRegister(user);
    }

    const [loginSuccess, setLoginSucess] = useState(false)
    const showMainContentHandler = (isSucess) => {
        setLoginSucess(isSucess);
        props.isUserLoggedIn(isSucess);
    }

    return(
        <div className="user-setup">
            {!isRegister && <LoginForm isRegisterClick={registerFormHandler} registeredAccounts={props.registeredAccounts} loginSucessHandler={showMainContentHandler} /> }
            {isRegister && <UserRegistration isRegisterCancel={registerFormHandler} onSubmitRegister={submitRegisterHandler} />}
        </div>
    )
}

export default UserSetup;