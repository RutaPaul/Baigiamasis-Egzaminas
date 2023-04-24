import React from "react";
import "./icon.css";

const Icon = ({icon, onClick, hidden}) => {
    return (
        <>
        {
            hidden ?
            ""
            :
            <i className={icon + " clickableIcon"} onClick={onClick}></i>
        }
        </>
    )
}

export default Icon;