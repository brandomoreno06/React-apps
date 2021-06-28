import { useState } from "react";
import "./MainContent.css";
import DashBoard from "../DashBoard/DashBoard";
import SideBar from "../SideBar/SideBar";


const DUMMY_EXPENSES = [
  {
    category: "Food",
    amount: 10000,
    notes: "Mcdo delivery",
    date: new Date(2021, 5, 19)
  },
  {
    category: "Utilities",
    amount: 100000,
    notes: "Bill for this month",
    date: new Date(2021, 6, 19)
  },
  {
    category: "Insurance",
    amount: 100000,
    notes: "life insurance monthly",
    date: new Date(2022, 9, 19)
  },
  {
    category: "Travel",
    amount: 100000,
    notes: "travel to mars",
    date: new Date(2023, 3, 25)
  },
];


const DUMMY_BUDGET = [
  {
    category: "Food",
    amount: 1000000,
    date: new Date(2021, 5)
  },
  {
    category: "Utilities",
    amount: 1000000,
    date: new Date(2021, 6)
  },
  {
    category: "Insurance",
    amount: 100000,
    date: new Date(2022, 9)
  },
  {
    category: "Travel",
    amount: 1000000,
    date: new Date(2023, 3)
  }
]



const MainContent = (props) => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const saveNewExpense = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })
  }

  const [budget, setBudget] = useState(DUMMY_BUDGET);
  const saveNewBudget = (budget) => {
    setBudget((previousBudget) => {
      return [budget, ...previousBudget];
    })
  }

  const deletedItemHandler = (deletedItem) => {
    console.log(expenses[deletedItem]);
    setExpenses(expenses => {
      return [...expenses.slice(0, deletedItem), ...expenses.slice(deletedItem + 1)];
    });
  }


  return(
      <div className="main-content">
          <DashBoard expenses={expenses} budget={budget} saveExpenseHandler={saveNewExpense} saveBudgetHandler={saveNewBudget} deletedItems={deletedItemHandler}/>
          <SideBar expenses={expenses} budget={budget}/>
      </div>
  );
};

export default MainContent;