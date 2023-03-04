import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import FlashcardApp from './components/FlashcardApp';

function App() {

  return (
    <div className="">
        <FlashcardApp/>
      <header className="">
        {/* <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Landingpage/>}/>
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
