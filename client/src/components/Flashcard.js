import React, { useState } from 'react';

export default function Flashcard( { flashcard } ) {
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
