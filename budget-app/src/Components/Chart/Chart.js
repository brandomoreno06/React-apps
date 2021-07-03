import "./Chart.css";
import ChartBar from "./ChartBar"

const Chart =(props) => {

    const budgetPointValues = props.dataPoints.map((dataPoint) => dataPoint.valueBudget);
    const expensePointValues = props.dataPoints.map((dataPoint) => dataPoint.valueExpense);


    const totalMaximumBudget = Math.max(...budgetPointValues);
    const totalMaximumExpense = Math.max(...expensePointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint, index) => (
                <ChartBar key={index} valueBudget={dataPoint.valueBudget} valueExpense={dataPoint.valueExpense} maxBudget={totalMaximumBudget} maxExpense={totalMaximumExpense} label={dataPoint.label}/>
            ))}
        </div>
    )
}

export default Chart;