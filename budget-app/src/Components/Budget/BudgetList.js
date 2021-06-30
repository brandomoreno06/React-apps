import "./BudgetList.css";
import BudgetItem from "./BudgetItem";

const BudgetList = (props) => {

    const isDeletedHandler = (deletedItem) => props.deletedItems(deletedItem);

    return(
        <ul className="budget-list">
            
            {props.items.map((item, index) => (
                <BudgetItem key={index} id={item.id} category={item.category} amount={item.amount} date={item.date} type={item.type} isDeleted={isDeletedHandler} />
            ))}

            { props.items.length === 0 && 
            <div className="expenses-list__empty">Budget list is empty.</div> }

        </ul>
    )
}

export default BudgetList;