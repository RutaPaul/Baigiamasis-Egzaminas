import React, {useState} from "react";
import UserPanel from '../UserPanel';
import "./header.css";

const Header = (props) => {
    return(
        <div className="Header">
            <div className="HeaderInfo">
                {props.authentication.Username}
            </div>
            <UserPanel authentication={props.authentication} setAuthentication={props.setAuthentication}/>
        </div>
    )
}

export default Header;
