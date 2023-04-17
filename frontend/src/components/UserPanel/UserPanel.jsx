import React, {useState} from "react";
import LoginForm from "../LoginForm";
import "./userPanel.css";

const UserPanel = (props) => {
    
    const [formVisible, setFormVisibility] = useState(false); 
    return(
        <div className="UserPanel">
            {
                props.authentication.Authenticated ? 
                <button type="button" class="btn btn-outline-dark" onClick={()=>{
                    setFormVisibility(false)
                    props.setAuthentication({Username:"", Authenticated:false})
                }}>Logout</button>
                :
                <button type="button" class="btn btn-outline-dark" onClick={()=>{setFormVisibility(!formVisible)}}>Login</button>
            }
            
            {   
            (formVisible && !props.authentication.Authenticated) ?
                <LoginForm setAuthentication={props.setAuthentication}/>
                :
                ""
            }
        </div>
    )
}

export default UserPanel;
