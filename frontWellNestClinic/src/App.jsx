/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Route, Routes} from "react-router-dom";
import './App.css'
import MySchedule from './components/MySchedule/MySchedule';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/mySchedule" element={<MySchedule/>} />
      </Routes>
    </div>
  )
}

export default App
