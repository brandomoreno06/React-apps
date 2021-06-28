import "./BudgetList.css";
import BudgetItem from "./BudgetItem";

const BudgetList = (props) => {
    return(
        <ul className="budget-list">
            {props.items.map((item, index) => (
                <BudgetItem key={index} category={item.category} amount={item.amount} date={item.date} />
            ))}
        </ul>
    )
}

export default BudgetList;