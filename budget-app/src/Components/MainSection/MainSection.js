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

    const expensesHandler = (expenses) => {
        props.expensesHandler(expenses)
    }

    const budgetHandler = (budget) => {
        props.budgetHandler(budget)
    }

    const isLoggedInHandler = (foundUser) => {
        setIsUserLoggedIn(foundUser);
        props.isUserLoggedIn(foundUser)
        // console.log(foundUser)
    }
    return(
        <div className="main-section">
            { !isUserLoggedIn &&  <UserSetup onSucessfulRegister={storeUserHandler} registeredAccounts={props.registeredAccounts} isUserLoggedIn={isLoggedInHandler}/> }
            { isUserLoggedIn && <MainContent expensesHandler={expensesHandler} budgetHandler={budgetHandler} currentUser={props.currentUser}/> }
        </div>
    );
};


export default MainSection;