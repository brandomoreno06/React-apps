import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.category}</h2>
                <h3>{props.notes}</h3>
                <div className="expense-item__price">{props.amount}</div>
            </div>
           
        </Card>
    )
};

export default ExpenseItem;