import "./SideBar.css"
import AccountSummary from "../AccountSummary/AccountSummary";


const SideBar = (props) => {

    const budgetSectionHandler = () => {
        props.dashBoardDisplay("budget");
        console.log(props.displaySection)
    }
    const expenseSectionHandler = () => {
        props.dashBoardDisplay("expenses");
        console.log(props.displaySection)
    }

    return(
        <div>
        <AccountSummary expenses={props.expenses} budget={props.budget} />
        <div className="card__section">
            <button className="cards_budget-expenses card card__background" onClick={budgetSectionHandler}>BUDGET</button>
            <button className="cards_budget-expenses card card__background" onClick={expenseSectionHandler}>EXPENSES</button>
        </div>
        </div>
    )
}

export default SideBar;