import {useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"


const Expenses = (props) => {
    
    const [filteredYear, setSelectedYear] = useState("true");
    const filterChangeHandler = (selectedValue) => {
        setSelectedYear(selectedValue)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const expenseList = filteredYear === "true" ? props.expenses : filteredExpenses;

    const deletedItemHandler = (deletedItem) => props.deletedItems(deletedItem);

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter expenses={props.expenses} onChangeFilter={filterChangeHandler} />
                {/* <ExpensesChart /> */}
                <ExpensesList items={expenseList} deletedItemHandler={props.deletedItemHandler} deletedItems={deletedItemHandler} />
            </Card> 
        </div>
    )
}

export default Expenses;