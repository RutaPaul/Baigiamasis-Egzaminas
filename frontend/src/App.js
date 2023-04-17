import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import Main from "./pages/Main";
import Questions from "./pages/Questions";
import './App.css';

function App() {
  const [Authentication, setAuthentication] = useState({Username:"", Authenticated:false})
  return (
    <div className="App">
      <Header authentication={Authentication} setAuthentication={setAuthentication}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main/>}/>
          <Route path="/Questions" exact element={<Questions/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
