import "./ExpensesFilter.css"


const ExpensesFilter = (props) => {

    const dropDown = (e) => props.onChangeFilter(e.target.value);
    const allYears = props.expenses.map(expense => {return expense.date.getFullYear()})
    const uniqueYears = [...new Set(allYears)].sort((a,b) => a-b);
    
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <h5>Filter by:</h5>
                
                <select onChange={dropDown} value={props.selected}>
                    <option value="true">All Year</option>
                    {uniqueYears.map(year => ( <option key={year} value={year}>{year}</option> ))}
                </select>
                </div>
        </div>
    )
}


export default ExpensesFilter;