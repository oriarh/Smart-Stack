import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import FlashcardList from './FlashcardList';


export default function Flashcard( { flashcard } ) {
  

  const [ cardFlip, setCardFlip ] = useState(false)

 console.log(flashcard);
  return (
    <> 
      <div className={`card ${cardFlip ? 'flip' : ''}`} onClick={() => setCardFlip(!cardFlip)}>
        <div className='front'>
          {flashcard.questionText}
          <div className='flashcardOptions'>
            {flashcard.options.map(option => {
              return <div className='flashcardOption'>{option}
              </div>
            })}
          </div>
        </div>
        <div className='back'>
          {flashcard.answer}
        </div>
      </div>
    </>
  )
}
