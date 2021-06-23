import React, {useState} from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES =[
  {
    title: "Car Insurance",
    amount: "10000",
    date: new Date(2021, 5, 19)
  },
  {
    title: "Life Insurance",
    amount: "100000",
    date: new Date(2021, 6, 19)
  },
  {
    title: "House Insurance",
    amount: "100000",
    date: new Date(2022, 9, 19)
  },
  {
    title: "Car Insurance",
    amount: "100000",
    date: new Date(2023, 3, 25)
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;