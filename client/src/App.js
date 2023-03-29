import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import FlashcardApp from './components/FlashcardApp';
import Signup from './components/Signup';
import Login from './components/Login';

//uri: '/graphql',
/* const client = new ApolloClient({
  uri: 'http://localhost:9090/graphql',
  cache: new InMemoryCache(),
}); */
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  return (
  
    <ApolloProvider client={client}>
      <div className="">
        <header className="">
          {/* <FlashcardApp/>
          <Signup/>
          <Login/> */}
          <Routes>
            <Route path='/flashcard' element={<FlashcardApp/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Landingpage/>}/>
          </Routes>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;