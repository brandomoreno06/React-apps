import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"
import { useState } from "react";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
            type: "expense"
        };
        props.onAddExpense(expenseData);
    };

    const [displayForm, setDisplayForm] = useState(false);

    const displayFormHandler = () => {
        setDisplayForm(true);
    }

    const hideFormHandler = () => {
        setDisplayForm(false);
    }

    return(
        <div className="new-expense">
    
            {!displayForm && props.isEditing.length === 0  ?
                <button onClick={displayFormHandler}>Add New Expense</button> : null
            }

            {displayForm &&
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideFormHandler={hideFormHandler} />
            }

            {props.isEditing.length > 0 ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideFormHandler={hideFormHandler} isEditing={props.isEditing} /> : null
            }
            
        </div>
    );
}

export default NewExpense;
