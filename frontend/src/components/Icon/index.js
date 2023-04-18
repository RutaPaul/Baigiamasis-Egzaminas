import React from "react";
import "./icon.css";

const Icon = ({icon, onClick, clickable}) => {
    return (
        <>
        {
            clickable ?
            <i className={icon + " clickableIcon"} onClick={onClick}></i>
            :
            <i className={icon} onClick={onClick}></i>
        }
        </>
    )
}

export default Icon;