import { useState } from "react";
import "./BudgetItem.css";
import Card from "../UI/Card";
import BudgetDate from "./BudgetDate";
import { FaTrash } from 'react-icons/fa';
import DeleteConfirmation from "../UI/DeleteConfirmation";



const BudgetItem = (props) => {
  
    const formattedAmount = Intl.NumberFormat('en-US').format(props.amount);

    const[showDeleteQuery, setShowDeleteQuery] = useState(false);
    const showDeleteQueryHandler = () => { setShowDeleteQuery(!showDeleteQuery); }
    const cancelDeleteHandler = () => {showDeleteQueryHandler()}

    const proceedDeleteHandler = () => {
        const deletedItem = [props.type, props.id]
        props.isDeleted(deletedItem);
        showDeleteQueryHandler();
    }


    return (
        <Card className="budget-item">
            
            <div className="budget-item__description">
                <h2>{props.category}</h2>
                <div>
                    <h3>Budget for: </h3>
                    <BudgetDate date={props.date} />
                </div>
                <div className="budget-item__price">{formattedAmount}</div>
                <span className="trash__icon" onClick={showDeleteQueryHandler}><FaTrash /></span>
            </div>

            {showDeleteQuery && <DeleteConfirmation cancelDelete={cancelDeleteHandler} proceedDelete={proceedDeleteHandler}/>}
        </Card>
    )
}

export default BudgetItem;