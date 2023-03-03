import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList( { flashcardsListProp } ) {
  return (
    <div>
      {flashcardsListProp.map( flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })
      }
    </div>
  )
}
