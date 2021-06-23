import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
import AddNewExpenseButton from "./AddNewExpense";
import { useState } from "react";


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    //ASSIGNMENT
    const [displayForm, setDisplayForm] = useState(false)
    const displayFormHandler = (value) => {
        setDisplayForm(value);
    }

    return(
        <div className="new-expense">  
            { !displayForm? <AddNewExpenseButton showFormHandler={displayFormHandler} /> : 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideFormHandler={displayFormHandler} /> }  
        </div>
    );
}

export default NewExpense;
