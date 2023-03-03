import React, { useState } from 'react';
import FlashcardList from './FlashcardList'
import Navigation from './Navigation';

export default function FlashcardApp() {
    const [flashcards, setFlashcards] = useState(flashcardQuestions)

  return (
    <>        
        <Navigation/>
        <FlashcardList flashcardsListProp = {flashcards} />
    </>
  )
}   
const flashcardQuestions = [
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
  
  