import React, {useState} from "react";
import LoginForm from "../LoginForm";
import "./userPanel.css";
import Icon from "../Icon";

const UserPanel = (props) => {
    
    const [formVisible, setFormVisibility] = useState(false); 
    return(
        <div className="UserPanel">
            {
                props.authentication.Authenticated ? 
                <button type="button" className="btn btn-outline-dark" onClick={()=>{
                    setFormVisibility(false)
                    props.setAuthentication({Username:"", Authenticated:false})
                }}>Logout</button>
                :
                <Icon icon="fa-solid fa-user fa-2xl headerIcon" onClick={()=>{setFormVisibility(!formVisible)}} clickable={true}/>
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
