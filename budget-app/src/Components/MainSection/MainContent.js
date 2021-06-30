import { useState } from "react";
import "./MainContent.css";
import DashBoard from "../DashBoard/DashBoard";
import SideBar from "../SideBar/SideBar";


const DUMMY_EXPENSES = [
  {
    category: "Food",
    amount: 10000,
    notes: "Mcdo delivery",
    date: new Date(2021, 5, 19),
    type: "expense",
    id: 40
  },
  {
    category: "Utilities",
    amount: 100000,
    notes: "Bill for this month",
    date: new Date(2021, 6, 19),
    type: "expense",
    id: 30
  },
  {
    category: "Insurance",
    amount: 100000,
    notes: "life insurance monthly",
    date: new Date(2022, 9, 19),
    type: "expense",
    id: 20
  },
  {
    category: "Housing",
    amount: 100000,
    notes: "travel to mars",
    date: new Date(2023, 3, 25),
    type: "expense",
    id: 10
  },
];


const DUMMY_BUDGET = [
  {
    category: "Food",
    amount: 1000000,
    date: new Date(2021, 5),
    type: "budget",
    id: 40
  },
  {
    category: "Utilities",
    amount: 1000000,
    date: new Date(2021, 6),
    type: "budget",
    id: 30
  },
  {
    category: "Insurance",
    amount: 100000,
    date: new Date(2022, 9),
    type: "budget",
    id: 20
  },
  {
    category: "Housing",
    amount: 1000000,
    date: new Date(2023, 3),
    type: "budget",
    id: 10
  }
]


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const categories = ["Housing", "Transportation", "Food", "Utilities", "Insurance", "Medical", "Savings"]



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
      console.log(previousBudget)
      return [budget, ...previousBudget];
    })
  }

  const deletedItemHandler = (deletedItem) => {
    const [type, id] = deletedItem;
    

    if(type === "expense") {
      const indexOfDeleted = expenses.map(expense => { return expense.id; }).indexOf(id);

      setExpenses(expenses => {
        return [...expenses.slice(0, indexOfDeleted), ...expenses.slice(indexOfDeleted + 1)];
      });
    }

    if(type === "budget") {
      const indexOfDeleted = budget.map(budget => { return budget.id; }).indexOf(id);

      setBudget(budget => {
        return [...budget.slice(0, indexOfDeleted), ...budget.slice(indexOfDeleted + 1)];
      });
    }
  }

  return(
      <div className="main-content">
          <DashBoard expenses={expenses} budget={budget} saveExpenseHandler={saveNewExpense} saveBudgetHandler={saveNewBudget} deletedItems={deletedItemHandler} />
          <SideBar expenses={expenses} budget={budget}/>
      </div>
  );
};

export default MainContent;
export {months, categories};