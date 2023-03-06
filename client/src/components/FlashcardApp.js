import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import FlashcardList from './FlashcardList'
import Navigation from './Navigation';
import { QUERY_QUESTION } from '../utils/queries'
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_QUESTIONS } from '../utils/queries';

export default function FlashcardApp() {
    const [flashcards, setFlashcards] = useState(flashcardQuestions)
    const [ loading, data ] = useQuery(QUERY_QUESTION)

    function getQuestion () {
      
    }

  return (
    <>        
        <Navigation/>
        <div className='container'>
          <FlashcardList flashcardsListProp = {flashcards[0]} />
        </div>
        <div className='buttonContainer'>
          <button className='nextButton btn btn-primary' onClick={() => {
            console.log(Math.floor(Math.random()*flashcardQuestions.length))
          }}>Next</button>
        </div>
    </>
  )
}   
/* const flashcardQuestions = [
    {
      id: 1,
      question: "What is Javascript?",
      answer: 'Programming Language',
      options: [
        "Programming Language",
        "Speaking Language",
        "Novel",
        "Animal"
      ]
    },
    {
      id: 2,
      question: "This is a question, what is the answer?",
      answer: 'Answer',
      options: [
        "Answer",
        "Answer 2",
        "Answer 3",
        "Answer 4"
      ]
    }
  ]
   */
  