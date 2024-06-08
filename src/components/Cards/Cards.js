import React from 'react';
import "./Cards.css";
import cardData from './cardData';

const Cards = () => {
  return (
    <div className='cards-container'>
      {
        cardData.map((card,index)=>(
            <div key={index} className="cards" >
            <div className='logoTitle'>
            <h2 className='logo'>{card.logo}</h2> 
            <p className='title'>{card.title}</p>
            </div>
            <p className='description'>{card.description}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Cards
