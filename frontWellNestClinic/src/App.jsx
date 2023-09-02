/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import ConfirmShift from './components/ConfirmShift/confirmShift';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, useLocation} from "react-router-dom";
import './App.css'

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname!='/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/confirmShift' element={<ConfirmShift/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
