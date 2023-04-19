import React, {useState, useEffect} from "react";
import {getTopQuestions} from "../../utils/api";
import "./mainPage.css";
import QuestionBar from "./QuestionBar";

const MainPage = (props) => {

    const getQuestions = async () =>{
        let data = await getTopQuestions(5);
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
            questions ? 
            (
                questions.map((el,index)=>(
                    <QuestionBar question={el} key={index}/>
                ))
            )
            :
            <div>No Questions available</div>
        }
        {
            questions ?
                <button > See All</button>
            :
            ""
        }
        </>
    )
}

export default MainPage;
