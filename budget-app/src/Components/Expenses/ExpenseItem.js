import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { FaTrash, FaEdit } from 'react-icons/fa';
import DeleteConfirmation from "../UI/DeleteConfirmation";
import EditConfirmation from "../UI/EditConfirmation";



const ExpenseItem = (props) => {
    const formattedAmount = Intl.NumberFormat('en-US').format(props.amount);

    const[showDeleteQuery, setShowDeleteQuery] = useState(false);
    const showDeleteQueryHandler = () => { setShowDeleteQuery(!showDeleteQuery); }
    const cancelDeleteHandler = () => {showDeleteQueryHandler()}

    const proceedDeleteHandler = () => {
        const deletedItem = [props.type, props.id]
        props.isDeleted(deletedItem);
        showDeleteQueryHandler();
    }

    const[showEditQuery, setShowEditQuery] = useState(false);
    const showEditQueryHandler = () => { setShowEditQuery(!showEditQuery); }
    const cancelEditHandler = () => {showEditQueryHandler()};


    const proceedEditHandler = () => {
        const editedItem = [props.category, props.amount, props.notes, props.date, props.type, props.id]
        console.log(editedItem)
        props.isEdited(editedItem);
        showEditQueryHandler();
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{props.category}</h2>
                <h3>{props.notes}</h3>
                <div className="expense-item__price">{formattedAmount}</div>
                <span className="edit__icon" onClick={showEditQueryHandler}><FaEdit /></span>
                <span className="trash__icon" onClick={showDeleteQueryHandler}><FaTrash /></span>
            </div>

            { showEditQuery && <EditConfirmation cancelEdit={cancelEditHandler} proceedEdit={proceedEditHandler}/> }

            { showDeleteQuery && <DeleteConfirmation cancelDelete={cancelDeleteHandler} proceedDelete={proceedDeleteHandler}/> }    

        </Card>
    )
};

export default ExpenseItem;