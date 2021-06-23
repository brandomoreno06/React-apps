import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState("2021");
    const filterChangeHandler = (selectedValue) => {
        setSelectedYear(selectedValue);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    console.log(filteredExpenses)

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selectedValue={filteredYear} items={props.expenses} />
                <ExpensesChart expenses={filteredExpenses} />

                {filteredExpenses.length > 0 ? 
                <ExpensesList items={filteredExpenses} /> :
                <div style={{color: "white", textAlign: "center", margin: "2rem"}}>No Found Expenses</div>}

            </Card> 
        </div>
    )
}

export default Expenses;