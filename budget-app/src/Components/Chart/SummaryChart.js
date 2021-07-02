import "./SummaryChart.css"
import Chart from "./Chart";
import { categories } from "../MainSection/MainContent";


const SummaryChart = (props) => {
    const [category1, category2, category3, category4, category5, category6, category7] = categories;

    const chartDataPoints = [
        { label: category1, valueBudget: 0, valueExpense: 0 },
        { label: category2, valueBudget: 0, valueExpense: 0 },
        { label: category3, valueBudget: 0, valueExpense: 0 },
        { label: category4, valueBudget: 0, valueExpense: 0 },
        { label: category5, valueBudget: 0, valueExpense: 0 },
        { label: category6, valueBudget: 0, valueExpense: 0 },
        { label: category7, valueBudget: 0, valueExpense: 0 },
    ];

    const dateNow = new Date();
    const yearNow = dateNow.getFullYear()
    const monthNow = dateNow.getMonth();



    //get budget data this year and this month
    const budgetThisMonth = props.budget.filter((budget) => {
        return budget.date.getFullYear() === yearNow && budget.date.getMonth() === monthNow
    })

    for (const budget of budgetThisMonth) {
        const dataPoint = chartDataPoints.find((dataPoint) => {
            return dataPoint.label ===  budget.category;
        })
        const index = chartDataPoints.indexOf(dataPoint)
        chartDataPoints[index].valueBudget += budget.amount
    }



    //get expense data this year and this month
    const expensesThisMonth = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === yearNow && expense.date.getMonth() === monthNow
    })

    for (const expense of expensesThisMonth) {
        const dataPoint = chartDataPoints.find((dataPoint) => {
            return dataPoint.label === expense.category;
        })
        const index = chartDataPoints.indexOf(dataPoint)
        chartDataPoints[index].valueExpense += expense.amount
    }

    // console.log(chartDataPoints)
    
    return (
        <div className="summary-chart">
            <h3>This Month</h3>
            <Chart dataPoints={chartDataPoints} />
        </div>
    );
};

export default SummaryChart;



//categories = ["Housing", "Transportation", "Food", "Utilities", "Insurance", "Medical", "Savings"]