/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
