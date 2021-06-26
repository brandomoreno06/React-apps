import { useState } from "react";
import "./DashBoard.css";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";


const DUMMY_EXPENSES =[
    {
      category: "Food",
      amount: "10000",
      notes: "Mcdo delivery",
      date: new Date(2021, 5, 19)
    },
    {
      category: "Utilities",
      amount: "100000",
      notes: "Bill for this month",
      date: new Date(2021, 6, 19)
    },
    {
      category: "Insurance",
      amount: "100000",
      notes: "life insurance monthly",
      date: new Date(2022, 9, 19)
    },
    {
      category: "Travel",
      amount: "100000",
      notes: "travel to mars",
      date: new Date(2023, 3, 25)
    },
  ];
  


const DashBoard = (props) => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
      setExpenses((previousExpenses) => {
        return [expense, ...previousExpenses];
      })
    }

    return(
        <div className="dashboard">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default DashBoard;