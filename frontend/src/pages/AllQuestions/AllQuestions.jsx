import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./allquestions.css";
import {getAllQuestions} from "../../utils/api";
import QuestionBar from "../../components/MainPage/QuestionBar";

function AllQuestions() {

    let navigate = useNavigate();
    const getQuestions = async () =>{
        let data = await getAllQuestions();
        if(data){
            setQuestions(data);
            if(allQuestions == null)
                setAllQuestions(data);
        }
    }

    const filterBy = async (filterBy) =>{
        if(filterBy == "1"){
            let newQuestions = null;
            if(answeredFilter){
                newQuestions = allQuestions.filter(x=>x.Answer == 1)
            }
            else {
                newQuestions = allQuestions.filter(x=>x.Answer !== 1)
            }

            setAnsweredFilter(!answeredFilter);
            setQuestions([...newQuestions]);  
        }
        if(filterBy == "2"){
            let newQuestions = null;
            if(dateSort){
                newQuestions = questions.sort(function(a,b){return new Date(b.Date) - new Date(a.Date)})
            }
            else {
                newQuestions = questions.sort(function(a,b){return new Date(a.Date) - new Date(b.Date)})
            }
            setDateSort(!dateSort);
            setQuestions([...newQuestions]);  
        }
        if(filterBy == "3"){
            let newQuestions =  null;
            if(likeSort){
                function compare( a, b ) {
                    if ( a.Likes < b.Likes ){
                      return 1;
                    }
                    if ( a.Likes > b.Likes ){
                      return -1;
                    }
                    return 0;
                }  
                newQuestions = questions.sort(compare)
            }
            else {
                function compare( a, b ) {
                    if ( a.Likes < b.Likes ){
                      return -1;
                    }
                    if ( a.Likes > b.Likes ){
                      return 1;
                    }
                    return 0;
                }  
                newQuestions = questions.sort(compare)
            }
            setLikeSort(!likeSort);
            setQuestions([...newQuestions]);
        }
        if(filterBy == "4"){
            let newQuestions =  null;
            if(dislikeSort){
                function compare( a, b ) {
                    if ( a.Likes < b.Dislikes ){
                      return 1;
                    }
                    if ( a.Likes > b.Dislikes ){
                      return -1;
                    }
                    return 0;
                }  
                newQuestions = questions.sort(compare)
            }
            else {
                function compare( a, b ) {
                    if ( a.Likes < b.Dislikes ){
                      return -1;
                    }
                    if ( a.Likes > b.Dislikes ){
                      return 1;
                    }
                    return 0;
                }  
                newQuestions = questions.sort(compare)
            }
            setDislikeSort(!dislikeSort);
            setQuestions([...newQuestions]);
        }
        if(filterBy == "5"){
            setQuestions([...allQuestions]);
        }
    }

    const [questions, setQuestions] = useState(null);
    const [allQuestions, setAllQuestions] = useState(null);
    const [answeredFilter, setAnsweredFilter] = useState(true);
    const [dateSort, setDateSort] = useState(true);
    const [likeSort, setLikeSort] = useState(true);
    const [dislikeSort, setDislikeSort] = useState(true);
    useEffect(()=>{
        if(!questions){
            getQuestions();
        }
    })

    return (
        <>      
        <div className='mainPage'>
            <div className='filterMenu'>
                <button style={{backgroundColor:"rgb(120, 0, 240)"}} className="btn btn-outline-info" onClick={()=>{filterBy("1")}}> Filter Answered</button>
                <button style={{backgroundColor:"rgb(120, 0, 240)"}} className="btn btn-outline-info" onClick={()=>{filterBy("2")}}> Sort By Date</button>
                <button style={{backgroundColor:"rgb(120, 0, 240)"}} className="btn btn-outline-info" onClick={()=>{filterBy("3")}}> Sort By likes</button>
                <button style={{backgroundColor:"rgb(120, 0, 240)"}} className="btn btn-outline-info" onClick={()=>{filterBy("4")}}> Sort By dislikes</button>
                <button style={{backgroundColor:"rgb(120, 0, 240)"}} className="btn btn-outline-info" onClick={()=>{filterBy("5")}}> Get All</button>
            </div>
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
        </div>
        </>
    );
}

export default AllQuestions;
