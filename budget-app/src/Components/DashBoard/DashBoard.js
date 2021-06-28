import "./DashBoard.css";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";
import Budget from "../Budget/Budget";
import NewBudget from "../NewBudget/NewBudget";

  
const DashBoard = (props) => {
  
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
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={props.expenses} deletedItems={deletedItemHandler} />
      <NewBudget onAddBudget={addBudgetHandler}/>
      <Budget budget={props.budget}/>
    </div>
  )
}

export default DashBoard;