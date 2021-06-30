import {useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter";
import { months } from "../MainSection/MainContent";


const Expenses = (props) => {
    
    const [filteredYear, setSelectedYear] = useState(["year", "all"]);
    const [filteredMonth, setSelectedMonth] = useState(["month", "all"]);
    const [filteredCategoy, setSelectedCategory] = useState(["category", "all"]);

    const yearValue = filteredYear[1];
    const monthValue = filteredMonth[1];
    const categoryValue = filteredCategoy[1];


    const filterChangeHandler = (selectedValue) => {
        const name = selectedValue[0];
        if(name === "year") { setSelectedYear(selectedValue) }
        if(name === "month") { setSelectedMonth(selectedValue) }
        if(name === "category") { setSelectedCategory(selectedValue) }
    }

    const filteredExpenses = props.expenses.filter((expense) => { 
        if (yearValue === "all") {
            if(monthValue === "all") {return expense.category === categoryValue };
            if(categoryValue === "all") { return expense.date.getMonth() === months.indexOf(monthValue)}
            return expense.date.getMonth() === months.indexOf(monthValue) && expense.category === categoryValue;
        }  
        if (monthValue === "all") {
            if (yearValue === "all") {return expense.category === categoryValue};
            if (categoryValue === "all") {return expense.date.getFullYear().toString() === yearValue};
            return expense.date.getFullYear().toString() === yearValue && expense.category === categoryValue;
        }

        if (categoryValue === "all") {
            if (yearValue === "all") {return expense.date.getMonth() === months.indexOf(monthValue)}
            if(monthValue === "all") {return expense.date.getFullYear().toString() === yearValue}
            return expense.date.getFullYear().toString() === yearValue && expense.date.getMonth() === months.indexOf(monthValue)
        }

        return expense.date.getMonth() === months.indexOf(monthValue) && expense.date.getFullYear().toString() === yearValue && expense.category === categoryValue;    
    })

    const expenseList = (yearValue === "all" && monthValue === "all" && categoryValue === "all") ? props.expenses : filteredExpenses;
    
    const deletedItemHandler = (deletedItem) => {
        props.deletedItems(deletedItem);
        if(filteredExpenses.length === 1) { setSelectedYear(["year", "all"]) }
    }

    const editedItemHandler = (editedItem) => {props.editedItems(editedItem);}

   
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter expenses={props.expenses} onChangeFilter={filterChangeHandler} />
                {/* <ExpensesChart /> */}
                <ExpensesList items={expenseList} deletedItemHandler={props.deletedItemHandler} deletedItems={deletedItemHandler} editedItems={editedItemHandler} />
            </Card> 
        </div>
    )
}

export default Expenses;