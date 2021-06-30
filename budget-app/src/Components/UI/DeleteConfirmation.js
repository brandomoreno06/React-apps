import "./DeleteConfirmation.css";
import Card from "./Card";

const DeleteConfirmation = (props) => {
    
    return(
        <Card className="delete__confirmation__section">
            <Card className="delete__confirmation">
                <h2 className="delete__question">Are you sure you want to delete this?</h2>
                <div className="button">
                    <button className="delete__cancel button" onClick={props.cancelDelete}>No</button>
                    <button className="delete__yes button" onClick={props.proceedDelete}>Yes</button>
                </div>
            </Card>
        </Card>
    )
}

export default DeleteConfirmation;