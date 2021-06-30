import "./EditConfirmation.css";
import Card from "./Card";

const EditConfirmation = (props) => {
    
    return(
        <Card className="edit__confirmation__section">
            <Card className="edit__confirmation">
                <h2 className="edit__question">Are you sure you want to edit this?</h2>
                <h3>You cannot revert this action.</h3>
                <div className="button">
                    <button className="edit__cancel button" onClick={props.cancelEdit}>No</button>
                    <button className="edit__yes button" onClick={props.proceedEdit}>Yes</button>
                </div>
            </Card>
        </Card>
    )
}

export default EditConfirmation;