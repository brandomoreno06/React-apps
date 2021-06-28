
const TotalExpenses = (props) => {

    const totalExpenses = props.totalExpenses;
    var formattedTotalExpense = new Intl.NumberFormat('en-US').format(totalExpenses);

    return(
        <div className="card__bottom">
            <div className="account__value">{formattedTotalExpense}</div>
            <h4>Total Expenses</h4>
        </div>
    )
}

export default TotalExpenses;