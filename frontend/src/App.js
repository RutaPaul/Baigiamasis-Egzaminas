import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import RightSidebar from './components/RightSidebar';
import Main from "./pages/Main";
import Question from "./pages/Question";
import QuestionForm from "./pages/Question/QuestionForm";
import AnswerForm from "./pages/Question/Answer/AnswerForm";
import AllQuestions from "./pages/AllQuestions";
import './App.css';

function App() {
  const [Authentication, setAuthentication] = useState({Username:"", Authenticated:false, ID:null})
  useEffect(() => {
    setAuthentication(Authentication);
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
          <Header authentication={Authentication} setAuthentication={setAuthentication}/>
          <div className='Main'>
            <Routes>
              <Route path="/" exact element={<Main/>}/>
              <Route path="/Question/:id" exact element={<Question authentication={Authentication}/>}/>
              <Route path="/QuestionForm/:id" exact element={<QuestionForm username={Authentication.Username}/>}/>
              <Route path="/AnswerForm/:id/:answerID" exact element={<AnswerForm username={Authentication.Username}/>}/>
              <Route path="/AllQuestions" exact element={<AllQuestions username={Authentication.Username}/>}/>
            </Routes>
            <div className='rightSidebar'>
              {
                Authentication.Authenticated ?
                <RightSidebar authentication={Authentication}/>
                :
                ""
              }
            </div>
          </div>
        </BrowserRouter>    
    </div>
  );
}

export default App;
