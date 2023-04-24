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
                <Icon icon="fa-solid fa-house fa-2xl headerIcon" onClick={goHome} hidden={false}/>
            </div>
            {
                props.authentication.Authenticated ?
                <div>
                    <button type="button" className="btn btn-outline-dark headerNewQuestionButton" onClick={createQuestion}>Ask a question</button>
                </div>
                :
                ""

            }
            <div className="HeaderInfo">
                
            </div>
            <div className="HeaderPanelRight">
                <UserPanel authentication={props.authentication} setAuthentication={props.setAuthentication}/>
            </div>
        </div>
    )
}

export default Header;
