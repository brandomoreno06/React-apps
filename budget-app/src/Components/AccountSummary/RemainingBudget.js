const RemainingBudget = (props) => {

    const remainingBudget = props.remainingBudget;
    const formattedRemainingBudget = new Intl.NumberFormat("en-US").format(remainingBudget)

    return(
        <div className="card__top">
            <div className="account__value">{formattedRemainingBudget}</div>
            <h4>Remaining Budget</h4>
        </div>
    )
}

export default RemainingBudget;