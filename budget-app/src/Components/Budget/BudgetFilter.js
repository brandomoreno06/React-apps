import "./BudgetFilter.css";
import { months, categories } from "../MainSection/MainContent";


const BudgetFilter = (props) => {

    const allYears = props.budget.map(budget => {return budget.date.getFullYear()})
    const uniqueYears = [...new Set(allYears)].sort((a,b) => a-b);

    const dropDown = (e) => {
        props.onChangeFilter([e.target.name, e.target.value]);
    }

    return(
        <div className="budget-filter">
            <div className="budget-filter__control">
                <h5>Filter by:</h5>
                
                <div className="filter__by_year">
                    <select onChange={dropDown} value={props.selected} name="year">
                        <option value="all">Year</option>
                        {uniqueYears.map(year => ( <option key={year} value={year}>{year}</option> ))}
                    </select>
                </div>

                <div className="filter__by_month">
                    <select onChange={dropDown} value={props.selected} name="month">
                        <option value="all">Month</option>
                        {months.map(month => ( <option key={month} value={month}>{month}</option> ))}
                    </select>
                </div>

                <div className="filter__by_category">
                    <select onChange={dropDown} value={props.selected} name="category">
                        <option value="all">Category</option>
                        {categories.map(category => ( <option key={category} value={category}>{category}</option> ))}
                    </select>
                </div>

            </div>
        </div>
    )
}


export default BudgetFilter;