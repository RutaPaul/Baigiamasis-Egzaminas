import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import Main from "./pages/Main";
import Question from "./pages/Question";
import QuestionForm from "./pages/Question/QuestionForm";
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
              <Route path="/Question/:id" exact element={<Question/>}/>
              <Route path="/QuestionForm/:id" exact element={<QuestionForm username={Authentication.Username} test={"DUCHAS"}/>}/>
            </Routes>
            <div className='rightSidebar'>
            rightSidebar
            </div>
          </div>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
