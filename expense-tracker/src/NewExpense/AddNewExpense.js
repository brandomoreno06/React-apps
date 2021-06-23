const AddNewExpenseButton = (props) => {
    const buttonClickHandler = () => props.showFormHandler(true);
 

    return <div className="add-button">
        <button onClick={buttonClickHandler}>Add New Expense</button>
    </div>
}

export default AddNewExpenseButton