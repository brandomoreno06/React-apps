import "./UserInput.css";


const UserInput = (props) => {
    const classes = `user-input ${props.className}`;

    return(
        <div className={classes}> 
            <label>{props.placeholder}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} required/>
        </div>
    )
}

export default UserInput;