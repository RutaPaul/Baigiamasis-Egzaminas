import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserPanel from '../UserPanel';
import {getHomePageUrl, getQuestionFormUrl} from "../../utils/api"
import "./header.css";
import Icon from "../Icon";

const Header = (props) => {
    let navigate = useNavigate();

    const goHome = () => {
        navigate(getHomePageUrl());
    };

    const createQuestion = () =>{
        navigate(getQuestionFormUrl());
    }
    
    return(
        <div className="Header">
            <div className="ActionIcons">
                <Icon icon="fa-solid fa-house fa-2xl headerIcon" onClick={goHome} clickable={true}/>
            </div>
            <div>
                <Icon icon="fa-solid fa-square-plus fa-2xl headerIcon" onClick={createQuestion} clickable={true}/>
            </div>
            
            <div className="HeaderInfo">
                {props.authentication.Username}
            </div>
            <UserPanel authentication={props.authentication} setAuthentication={props.setAuthentication}/>
        </div>
    )
}

export default Header;
