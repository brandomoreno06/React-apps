
const TotalBudget = (props) => {
    const totalBudget = props.totalBudget;
    const formattedTotalBudget = new Intl.NumberFormat('en-US').format(totalBudget);

    return(
        <div className="card__bottom" >
            <div className="account__value">{formattedTotalBudget}</div>
            <h4>Total Budget</h4>
        </div>
    )
}

export default TotalBudget;