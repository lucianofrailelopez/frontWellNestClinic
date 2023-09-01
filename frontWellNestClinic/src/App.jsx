/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Route, Routes} from "react-router-dom";
import './App.css'
import DoctorsList from './components/DoctorsList/DoctorsList';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/doctorsList' element={<DoctorsList/>}/>
      </Routes>
    </div>
  )
}

export default App
