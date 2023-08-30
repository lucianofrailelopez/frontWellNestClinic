import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import CheckUser from './components/CheckUser/CheckUser';
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/checkUser' element={<CheckUser/>}/>
      </Routes>
    </div>
  )
}

export default App
