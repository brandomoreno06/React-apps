import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"


const ExpensesList = (props) => {

    const isDeletedHandler = (deletedItem) => props.deletedItems(deletedItem);
    const isEditedHandler = (editedItem) => props.editedItems(editedItem);

    return(
        
        <ul className="expenses-list">

            
            {props.items.map((item, index) => (
                <ExpenseItem key={index} id={item.id} category={item.category} amount={item.amount} date={item.date} notes={item.notes} type={item.type} isDeleted={isDeletedHandler} isEdited={isEditedHandler} />
            ))}{/* Create individual list for each item in expenses array */}

            
            { props.items.length === 0 && <div className="expenses-list__empty">List is empty.</div> }{/* Show when list is empty */}
            
        </ul>
    );
};


export default ExpensesList