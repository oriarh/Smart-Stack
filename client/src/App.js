import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';

function App() {
  return (
    <div className="">
      <header className="">
        <Routes>
          {/* <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/> */}
          <Route path='/' element={<Landingpage/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
