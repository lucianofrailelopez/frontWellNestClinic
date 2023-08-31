import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import {Route, Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
