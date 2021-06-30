import { useState } from "react";
import "./Budget.css";
import Card from "../UI/Card";
import BudgetList from "./BudgetList";
import BudgetFilter from "./BudgetFilter";
import { months } from "../MainSection/MainContent";


const Budget = (props) => {
  const [filteredYear, setSelectedYear] = useState(["year", "all"]);
  const [filteredMonth, setSelectedMonth] = useState(["month", "all"]);
  const [filteredCategoy, setSelectedCategory] = useState(["category", "all"]);

  const yearValue = filteredYear[1];
  const monthValue = filteredMonth[1];
  const categoryValue = filteredCategoy[1];


  const filterChangeHandler = (selectedValue) => {
    const name = selectedValue[0];
    if(name === "year") { setSelectedYear(selectedValue) }
    if(name === "month") { setSelectedMonth(selectedValue) }
    if(name === "category") { setSelectedCategory(selectedValue) }
  }


  //filter multiple selections
  const filteredBudget = props.budget.filter((budget) => { 
    if (yearValue === "all") {
      if(monthValue === "all") {return budget.category === categoryValue };
      if(categoryValue === "all") { return budget.date.getMonth() === months.indexOf(monthValue)}
      return budget.date.getMonth() === months.indexOf(monthValue) && budget.category === categoryValue;
    }  
    if (monthValue === "all") {
      if (yearValue === "all") {return budget.category === categoryValue};
      if (categoryValue === "all") {return budget.date.getFullYear().toString() === yearValue};
      return budget.date.getFullYear().toString() === yearValue && budget.category === categoryValue;
    }

    if (categoryValue === "all") {
      if (yearValue === "all") {return budget.date.getMonth() === months.indexOf(monthValue)}
      if(monthValue === "all") {return budget.date.getFullYear().toString() === yearValue}
      return budget.date.getFullYear().toString() === yearValue && budget.date.getMonth() === months.indexOf(monthValue)
    }

    return budget.date.getMonth() === months.indexOf(monthValue) && budget.date.getFullYear().toString() === yearValue && budget.category === categoryValue;    
  })

  const budgetList = (yearValue === "all" && monthValue === "all" && categoryValue === "all") ? props.budget : filteredBudget;
    
  const deletedItemHandler = (deletedItem) => {
    props.deletedItems(deletedItem);
    if(filteredBudget.length === 1) { setSelectedYear(["year", "all"])};
  };

  return(
    <div>
      <Card className="budget">
        <BudgetFilter budget={props.budget} onChangeFilter={filterChangeHandler} />
        <BudgetList items={budgetList} deletedItems={deletedItemHandler} />
      </Card> 
    </div>
  )
};

export default Budget;