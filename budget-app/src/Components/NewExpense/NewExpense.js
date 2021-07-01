import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
import { useState } from "react";



const NewExpense = (props) => {

    
    const [displayForm, setDisplayForm] = useState(false);
    const displayFormHandler = () => {setDisplayForm(true); }
    const hideFormHandler = (value) => { setDisplayForm(value); }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData}
        props.onAddExpense(expenseData);
        setDisplayForm(false)
    };

    const isEditedHandler = (value) => {props.isEditedHandler(value)}

    return(
        <div className="new-expense">
            
            {!displayForm && props.isEditing.length === 0  ? 
                <button onClick={displayFormHandler}>Add New Expense</button>: null
            }

            {displayForm ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideFormHandler={hideFormHandler} isEditedHandler={isEditedHandler} /> : null
            }

            {props.isEditing.length > 0 ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideFormHandler={hideFormHandler} isEditing={props.isEditing} isEditedHandler={isEditedHandler} /> : null
            }

        </div>
    );
}

export default NewExpense;
