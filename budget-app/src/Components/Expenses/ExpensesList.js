import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props) => {

    const isDeletedHandler = (deletedItem) => props.deletedItems(deletedItem);

    return(
        <ul className="expenses-list">
            {props.items.map((item, index) => (
                <ExpenseItem key={index} id={index} category={item.category} amount={item.amount} date={item.date} notes={item.notes} isDeleted={isDeletedHandler} />
            ))}
        </ul>
    );
};


export default ExpensesList