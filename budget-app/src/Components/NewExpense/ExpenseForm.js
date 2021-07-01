import {useState} from "react";
import "./ExpenseForm.css";
import UserInput from "../Login/UserInput";
import { categories } from "../MainSection/MainContent";


const ExpenseForm = (props) => {

    const [newExpense, setNewExpense] = useState({
        category: "Housing",
        amount: "",
        date: "2021-06-28",
        notes: "",
    });

    const {category, amount, date, notes} = newExpense;

    const changeHandler =(event) => {
        let value = event.target.value;
        setNewExpense({...newExpense, [event.target.name]: value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(amount <= 0) return;

        const expenseData = {
            category: category,
            amount: parseFloat(amount),
            date: new Date(date),
            notes: notes,
            type: props.isEditing ? props.isEditing[4] : "expense",
            id: props.isEditing ? props.isEditing[5] : Math.random().toString(),
            edited: props.isEditing ? true : false
        };

        props.onSaveExpenseData(expenseData);
        props.isEditedHandler("");
        
        setNewExpense({
            category: "Housing",
            amount: "",
            date: "2021-06-28",
            notes: ""
        })

        console.log(expenseData)
    }

    const hideFormHandler = () => {props.hideFormHandler(false)};

    return(
        <form onSubmit={submitHandler} className={props.className}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Category</label>
                        <select name="category" onChange={changeHandler} value={props.selected}>
                            {categories.map(category => { 
                                return <option key={category.toString()} value={category}>{category}</option>
                            })}
                        </select>
                </div>

                <UserInput className="new-expense__control" type="number" name="amount" value={amount} onChange={changeHandler} placeholder="Amount" min="0" />

                <UserInput className="new-expense__control" type="date" name="date" value={date} onChange={changeHandler} placeholder="Date"/>

                <UserInput className="new-expense__control" type="text" name="notes" value={notes} onChange={changeHandler} placeholder="Notes" />
                            
                {props.isEditing === null || props.isEditing === undefined ?
                    <div className="new-expense__actions">
                        <button type="button" onClick={hideFormHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div> :
                    <button type="submit">Confirm Edit</button>
                    
                }

            </div>
        </form>
    );
}

export default ExpenseForm;