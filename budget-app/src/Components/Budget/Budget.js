import "./Budget.css";
import Card from "../UI/Card";
import BudgetList from "./BudgetList";


const Budget = (props) => {
  return(
    <div>
      <Card className="budget">
        <BudgetList items={props.budget}/>
      </Card> 
    </div>
  )
};

export default Budget;