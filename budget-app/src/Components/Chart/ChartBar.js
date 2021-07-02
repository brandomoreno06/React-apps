import "./ChartBar.css"

const ChartBar = (props) => {
    let budgetBarFillHeight = "0%";
    if(props.maxBudget > 0) {
        budgetBarFillHeight = Math.round(((props.valueBudget-props.valueExpense) / props.maxBudget) * 100) + "%" ;
    }

    let expenseBarFillHeight = "0%";
    if(props.maxExpense > 0) {
        expenseBarFillHeight = Math.round((props.valueExpense / props.maxBudget) * 100) + "%" ;
    }

    let remainingBudgetstyle = "1px solid lightblue";
    if((props.valueBudget-props.valueExpense) < 0) { 
        remainingBudgetstyle= "2px solid red";
    };

    return (
        <div className="chart-bars-container">
            <div className="chart-budget" style={{borderBottom: remainingBudgetstyle}}>
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{height: budgetBarFillHeight}}></div>  
                </div>
                <div className="chart-bar__label">{props.label}</div>
            </div>

            <div className="chart-expense">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{height: expenseBarFillHeight}}></div>  
                </div>
            </div>
        </div>
    );
}

export default ChartBar;