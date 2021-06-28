import "./BudgetItem.css";
import Card from "../UI/Card";
import BudgetDate from "./BudgetDate";


const BudgetItem = (props) => {
  
    const formattedAmount = Intl.NumberFormat('en-US').format(props.amount);

    return (
        <Card className="budget-item">
            
            <div className="budget-item__description">
                <h2>{props.category}</h2>
                <div>
                    <h3>Budget for: </h3>
                    <BudgetDate date={props.date} />
                </div>
                <div className="budget-item__price">{formattedAmount}</div>
            </div>
        </Card>
    )
}

export default BudgetItem;