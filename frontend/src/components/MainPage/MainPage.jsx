import React, {useState, useEffect} from "react";
import {getAllQuestions} from "../../utils/api";
import "./mainPage.css";
import QuestionBar from "./QuestionBar";

const MainPage = (props) => {

    const getQuestions = async () =>{
        let data = await getAllQuestions();
        if(data){
            setQuestions(data);
        }
    }

    const [questions, setQuestions] = useState(null);

    useEffect(()=>{
        if(!questions){
            getQuestions();
        }
    })

    return(
        <>
        {
            questions ? questions.map((el,index)=>(
                <QuestionBar question={el} key={index}/>
            )) : <div>No Questions available</div>
        }
        </>
    )
}

export default MainPage;
