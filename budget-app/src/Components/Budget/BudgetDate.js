import "./BudgetDate.css";

const BudgetDate = (props) => {
    const year =  props.date.getFullYear();
    const month = props.date.toLocaleString("en-US", {month: "long"});

    return(
        <div className="budget-date">
            <div className="budget-date__header">
                <div className="budget-date__month">{month}</div>
            </div>
            <div className="budget-date__year">{year}</div>
        </div>
    )
}

export default BudgetDate;