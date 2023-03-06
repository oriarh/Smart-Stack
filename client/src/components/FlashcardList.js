import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList( { flashcards } ) {
  console.log(flashcards);
  return (
    <>
      <Flashcard flashcard={flashcardsListProp}/>
      {/* {flashcardsListProp.map( flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })
      } */}
    </>
  )
}
