import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import FlashcardApp from './components/FlashcardApp';

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
          {/* <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Landingpage/>}/>
          </Routes> */}
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
