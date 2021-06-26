import {useState} from "react";
import "./ExpenseForm.css";
import UserInput from "../Login/UserInput";


const ExpenseForm = (props) => {
    const [newExpense, setNewExpense] = useState({
        category: "Home",
        amount: "",
        date: "",
        notes: "",
    });

    const {category, amount, date, notes} = newExpense;

    const changeHandler =(event) => {
        let value = event.target.value;
        setNewExpense({...newExpense, [event.target.name]: value});
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            category: category,
            amount: amount,
            date: new Date(date),
            notes: notes
        };

        props.onSaveExpenseData(expenseData);
        setNewExpense({
            category: "",
            amount: "",
            date: "",
            notes: "",
        })
    }

    //on Cancel
    const hideFormHandler = () => props.hideFormHandler(false);

    return(
        <form onSubmit={submitHandler} className={props.className}>
            <div className="new-expense__controls">
                <select name="category" onChange={changeHandler} value={props.selected}>
                    <option value="Home">Home</option>
                    <option value="Travel">Travel</option>
                    <option value="Utility">Utility</option>
                </select>

                <UserInput className="new-expense__control" type="number" name="amount" value={amount} onChange={changeHandler} placeholder="Amount"/>

                <UserInput className="new-expense__control" type="date" name="date" value={date} onChange={changeHandler} placeholder="Date"/>

                <UserInput className="new-expense__control" type="text" name="notes" value={notes} onChange={changeHandler} placeholder="Notes" />

                <div className="new-expense__actions">
                    <button type="button" onClick={hideFormHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;