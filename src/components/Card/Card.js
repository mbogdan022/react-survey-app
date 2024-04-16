import React from 'react'
import './Card.css'

const Card = (categoryLetter, name, onCardPressed, customColor) => {
  return (
    <a onClick={() => onCardPressed()}>
      <div className='main-container'>
        <div className='inner-container'>
          <h1 className='card-text-style' style={{ color: customColor || 'black' }}>{categoryLetter}</h1>
          <h1 className='card-text-style' style={{ color: customColor || 'black' }}>{name}</h1>
        </div>
      </div>
    </a>
  )
}

export default Card