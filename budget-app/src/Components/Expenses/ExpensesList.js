import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {
    return(
        <ul className="expenses-list">
            {props.items.map((item, index) => (
                <ExpenseItem key={index} category={item.category} amount={item.amount} date={item.date} notes={item.notes} />
            ))}
        </ul>
    );
};


export default ExpensesList