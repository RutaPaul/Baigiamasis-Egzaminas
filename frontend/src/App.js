import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import Main from "./pages/Main";
import Question from "./pages/Question";
import './App.css';

function App() {
  const [Authentication, setAuthentication] = useState({Username:"", Authenticated:false})
  return (
    <div className="App">
      <Header authentication={Authentication} setAuthentication={setAuthentication}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/Question/:id" exact element={<Question/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
