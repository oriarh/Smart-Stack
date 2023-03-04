import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList( { flashcardsListProp } ) {
  return (
    <>
      <Flashcard flashcard={flashcardsListProp[0]}/>
      {/* {flashcardsListProp.map( flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })
      } */}
    </>
  )
}
