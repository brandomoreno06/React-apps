import "./DashBoard.css";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";
import Budget from "../Budget/Budget";
import NewBudget from "../NewBudget/NewBudget";
import { useState } from "react";

  
const DashBoard = (props) => {
  
  const[isEditing, setIsEditing] = useState([]);
  const editedItemHandler = (editedItem) => {
    setIsEditing(editedItem); 
  }

  const addExpenseHandler = (expenseData) => {
    const newExpense = {...expenseData};
    props.saveExpenseHandler(newExpense)
  }

  const addBudgetHandler = (budgetData) => {
    const newBudget = {...budgetData};
    props.saveBudgetHandler(newBudget);
  }

  const deletedItemHandler = (deletedItem) => props.deletedItems(deletedItem);

  return(
    <div className="dashboard">
      <NewExpense onAddExpense={addExpenseHandler} isEditing={isEditing} />
      <Expenses expenses={props.expenses} deletedItems={deletedItemHandler} editedItems={editedItemHandler} />
      <NewBudget onAddBudget={addBudgetHandler}/>
      <Budget budget={props.budget} deletedItems={deletedItemHandler}/>
    </div>
  )
}

export default DashBoard;