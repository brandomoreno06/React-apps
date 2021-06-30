import { useState } from "react";
import "./BudgetForm.css";
import UserInput from "../Login/UserInput";


const BudgetForm = (props) => {
    const [newBudget, setNewBudget] = useState({
        category: "Housing",
        amount: "",
        date: "2021-06",
    });

    const {category, amount, date} = newBudget;

    const changeHandler =(event) => {
        let value = event.target.value;
        setNewBudget({...newBudget, [event.target.name]: value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(amount <= 0) return;

        const budgetData = {
            category: category,
            amount: parseFloat(amount),
            date: new Date(date),
        };

        props.onSaveBudget(budgetData);
        setNewBudget({
            category: "Housing",
            amount: "",
            date: "2021-06",
        })
    }

    //on Cancel
    const hideFormHandler = () => props.hideFormHandler(false);

    return(
        <form onSubmit={submitHandler}>
            <div className="new-budget__controls">
                <div className="new-budget__control">
                    <label>Category</label>
                    <select name="category" onChange={changeHandler} value={props.selected}>
                        <option value="Housing">Housing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Food">Food</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Inurance">Insurance</option>
                        <option value="Medical">Medical</option>
                        <option value="Savings">Savings</option>
                    </select>
                </div>

                <UserInput className="new-budget__control" type="month" name="date" min="2021-01" value={date} onChange={changeHandler} placeholder="Budget for :"/>

                <UserInput className="new-budget__control" type="number" name="amount" value={amount} onChange={changeHandler} placeholder="Amount"/>

                <div className="new-budget__actions">
                    <button type="button" onClick={hideFormHandler}>Cancel</button>
                    <button type="submit">Add Budget</button>
                </div>
            </div>
        </form>
    );
}

export default BudgetForm;