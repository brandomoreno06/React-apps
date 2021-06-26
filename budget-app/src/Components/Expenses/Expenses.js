import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"


const Expenses = (props) => {
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter />
                {/* <ExpensesChart /> */}
                <ExpensesList items={props.expenses} />
            </Card> 
        </div>
    )
}

export default Expenses;