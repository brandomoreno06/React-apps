import "./AccountSummary.css";
import Card from "../UI/Card";
import RemainingBudget from "./RemainingBudget";
import TotalBudget from "./TotalBudget";
import TotalExpenses from "./TotalExpenses";



const AccountSummary = (props) => {
    const budgetData = props.budget;
    const budgetAmount = budgetData.map(budget => {return budget.amount})   
    const totalBudget = budgetAmount.length > 0 ? budgetAmount.reduce((accumulator, currentValue) => {return accumulator + currentValue}) : 0;


    const expensesDetails = props.expenses;
    const expensesAmount = expensesDetails.map(expense => {return expense.amount})
    const totalExpenses = expensesAmount.length > 0 ? expensesAmount.reduce((accumulator, currentValue) => {return accumulator + currentValue}) : 0;

    const remainingBudget = totalBudget - totalExpenses

    return(
        <Card className="card__background account__summary">
            <RemainingBudget remainingBudget={remainingBudget} />
            <div className="card__bottom-section">
                <TotalBudget totalBudget={totalBudget}/>
                <TotalExpenses totalExpenses={totalExpenses} />
            </div>
        </Card>
    )
}

export default AccountSummary;