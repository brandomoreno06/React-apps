import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    return(
        <ul className="expenses-list">
            {props.items.map((item, index) => (
                <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date} />
            ))}
        </ul>
    );
};


export default ExpensesList