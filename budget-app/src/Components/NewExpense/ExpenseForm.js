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
        };
        props.onSaveExpenseData(expenseData);
        setNewExpense({
            category: "Housing",
            amount: "",
            date: "2021-06-28",
            notes: ""
        })
    }

    //To Continue.... utilize submit handler...with type"edit"
    const confirmEditHandler = () => {
        const [category, amount, notes, date, type, id] = props.isEditing;
        
        const expenseDataEdit = {
            category: category,
            amount: parseFloat(amount),
            date: new Date(date),
            notes: notes,
            type: type,
            id: id
        }

        console.log(expenseDataEdit)
    }
    //To Continue....


    //on Cancel
    const hideFormHandler = () => props.hideFormHandler();

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
                    <button type="button" onClick={confirmEditHandler}>Confirm Edit</button>
                }

            </div>
        </form>
    );
}

export default ExpenseForm;