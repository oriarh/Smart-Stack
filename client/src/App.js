import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <Routes>
          {/* <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/herosection' element={<Herosection/>}/> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
