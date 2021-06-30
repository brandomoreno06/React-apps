import "./MainSection.css";
import UserSetup from "./UserSetup"
import MainContent from "./MainContent";
import { useState } from "react";


const MainSection = (props) => {
    const storeUserHandler = (user) => {
        const newUser = {...user}
        props.registerUsers(newUser);
    }

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const isLoggedInHandler = (isSucess) => {
        setIsUserLoggedIn(isSucess)
    }

    return(
        <div className="main-section">
            { !isUserLoggedIn &&  <UserSetup onSucessfulRegister={storeUserHandler} registeredAccounts={props.registeredAccounts} isUserLoggedIn={isLoggedInHandler}/> }
            { isUserLoggedIn && <MainContent /> }
        </div>
    );
};


export default MainSection;