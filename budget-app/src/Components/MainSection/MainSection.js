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

    const expensesHandler = (expenses) => {props.expensesHandler(expenses)}

    return(
        <div className="main-section">
            { !isUserLoggedIn &&  <UserSetup onSucessfulRegister={storeUserHandler} registeredAccounts={props.registeredAccounts} isUserLoggedIn={isLoggedInHandler}/> }
            { isUserLoggedIn && <MainContent expensesHandler={expensesHandler} /> }
        </div>
    );
};


export default MainSection;