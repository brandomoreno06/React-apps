import { useState } from "react";
import "./NewBudget.css";
import BudgetForm from "./BudgetForm";

const NewBudget = (props) => {
    const saveBudgetHandler = (enteredBudgetData) => {
        const budgetData = {
            ...enteredBudgetData,
            id: Math.random().toString(),
            type: "budget"
        };
        props.onAddBudget(budgetData);
    };


    const [displayForm, setDisplayForm] = useState(false)
    const displayFormHandler = (value) => {
        setDisplayForm(value);
    }
    

    const showForm = () => { displayFormHandler(true) };
    

    return(
        <div className="new-budget">  
            { !displayForm? <button onClick={showForm}>Add New Budget</button> : 
            <BudgetForm onSaveBudget={saveBudgetHandler} hideFormHandler={displayFormHandler} /> }  
        </div>
    );
}

export default NewBudget;