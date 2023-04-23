import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import RightSidebar from './components/RightSidebar';
import Main from "./pages/Main";
import Question from "./pages/Question";
import QuestionForm from "./pages/Question/QuestionForm";
import AnswerForm from "./pages/Question/Answer/AnswerForm";
import './App.css';

function App() {
  const [Authentication, setAuthentication] = useState({Username:"", Authenticated:false})
  useEffect(() => {
    setAuthentication(Authentication);
  }, []);
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header authentication={Authentication} setAuthentication={setAuthentication}/>
          <div className='Main'>
            <div className='leftSidebar'>
              leftSidebar
            </div>
            <Routes>
              <Route path="/" exact element={<Main/>}/>
              <Route path="/Question/:id/:username" exact element={<Question authentication={Authentication}/>}/>
              <Route path="/QuestionForm/:id" exact element={<QuestionForm username={Authentication.Username}/>}/>
              <Route path="/AnswerForm/:id" exact element={<AnswerForm username={Authentication.Username}/>}/>
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
