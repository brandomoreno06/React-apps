import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { FaTrash } from 'react-icons/fa';
import DeleteConfirmation from "../UI/DeleteConfirmation";



const ExpenseItem = (props) => {
    const formattedAmount = Intl.NumberFormat('en-US').format(props.amount);

    const[showDeleteQuery, setShowDeleteQuery] = useState(false);
    const showDeleteQueryHandler = () => { setShowDeleteQuery(!showDeleteQuery); }
    const cancelDeleteHandler = () => {showDeleteQueryHandler()}

    const proceedDeleteHandler = () => {
        props.isDeleted(props.id);
        showDeleteQueryHandler();
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{props.category}</h2>
                <h3>{props.notes}</h3>
                <div className="expense-item__price">{formattedAmount}</div>
                <span className="trash__icon" onClick={showDeleteQueryHandler}><FaTrash /></span>
            </div>

            {showDeleteQuery && <DeleteConfirmation cancelDelete={cancelDeleteHandler} proceedDelete={proceedDeleteHandler}/>}
        </Card>
    )
};

export default ExpenseItem;