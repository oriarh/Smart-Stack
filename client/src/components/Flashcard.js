import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import FlashcardList from './FlashcardList';
import { QUERY_QUESTION } from '../utils/queries';

export default function Flashcard( { flashcard } ) {
  const { loading, data } = useQuery(QUERY_QUESTION);

  const users = data?.users || [];

  const [ cardFlip, setCardFlip ] = useState(false)


  return (
    <> 
      <div className={`card ${cardFlip ? 'flip' : ''}`} onClick={() => setCardFlip(!cardFlip)}>
        <div className='front'>
          {flashcard.question}
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
