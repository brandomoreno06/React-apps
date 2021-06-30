import "./SideBar.css"
import AccountSummary from "../AccountSummary/AccountSummary";


const SideBar = (props) => {
    return(
        <AccountSummary expenses={props.expenses} budget={props.budget} />
    )
}

export default SideBar;