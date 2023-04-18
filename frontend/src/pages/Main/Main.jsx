import React, {useState, useEffect} from 'react';
import MainPage from '../../components/MainPage/MainPage';
import "./main.css";

function Main() {
  return (
    <div className='Main'>
      <div className='leftSidebar'>
        leftSidebar
      </div>
      <div className='mainPage'>
        <MainPage/>
      </div>
      <div className='rightSidebar'>
        rightSidebar
      </div>
    </div>
  );
}

export default Main;
