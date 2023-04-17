import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Header from "./components/Header";
import './App.css';

function App() {
  const [Authentication, setAuthentication] = useState({Username:"", Authenticated:false})
  return (
    <div className="App">
      <Header authentication={Authentication} setAuthentication={setAuthentication}/>
    </div>
  );
}

export default App;
