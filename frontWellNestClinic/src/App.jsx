/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import ConfirmShift from './components/ConfirmShift/confirmShift';
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/confirmShift' element={<ConfirmShift/>}/>
      </Routes>
    </div>
  )
}

export default App
