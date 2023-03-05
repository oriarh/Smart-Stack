import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import FlashcardApp from './components/FlashcardApp';
import Signup from './components/Signup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
  
    <ApolloProvider client={client}>
      <div className="">
        <header className="">
          <FlashcardApp/>
          {/* <Signup/> */}
          {/* <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Landingpage/>}/>
          </Routes> */}
        </header>
        <Signup/>
      </div>
    </ApolloProvider>
  );
}

export default App;
