import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import FlashcardList from './FlashcardList'
import Navigation from './Navigation';
import Footer from './Footer'
import Auth from '../utils/auth';

import { QUERY_QUESTIONS } from '../utils/queries';

export default function FlashcardApp() {
//    const [flashcards, setFlashcards] = useState(flashcardQuestions)
    //const [flashcards, setFlashcards] = useState([])
    const [ cardFlip, setCardFlip ] = useState(false)

    const { loading, data } = useQuery(QUERY_QUESTIONS); // returns [true|false, data:...]

    const questions = data?.allQuestions || [];

    const [questionIndex, setQuestionIndex] = useState(0)

    function setQuestionIndexIfOk() {
     if(questionIndex>=data.allQuestions.length-1) {
      // TODO: Show FINISHED flashcards
      alert("Finished flash cards!")
     } else {
      setQuestionIndex(questionIndex+1)
     }
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return window.location.assign('/');
      }

  return (
    <>        
        <Navigation/>
        <div className='container'>
          <div className={`card ${cardFlip ? 'flip' : ''}`} onClick={() => {setCardFlip(!cardFlip)}}>
            
            {/* <h3 className={`question-title ${!cardFlip ? "question-title" : "hide"}`}>{JSON.stringify(data?.allQuestions[questionIndex].questionTitle)}</h3> */}
            <div className={`question-detail ${!cardFlip ? "question-detail" : "hide"}`}>{JSON.stringify(data?.allQuestions[questionIndex].questionText)}</div>
            <div className='back'>{JSON.stringify(data?.allQuestions[questionIndex].answerText)}</div>
          </div>


          {/* {loading?(<div>Loaded</div>):<div>Loading..</div>} */}
          {/* {
          data?.allQuestions.map(question=>{
            // (<FlashcardList flashcards = {questions} />)
            <div className="card">
              <div className="question-text">Question: {question.questionText}</div>
            </div>
          })
          } */}
            
        </div>
        <div className='buttonContainer'>
          <button className='nextButton btn btn-primary' onClick={()=>{setQuestionIndexIfOk()}}>Next</button>
        </div>
        <Footer/>
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