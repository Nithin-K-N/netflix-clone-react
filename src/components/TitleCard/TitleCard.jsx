import React, { useEffect, useRef } from 'react'
import cardsData from '../../assets/cards/Cards_data'
import './titleCard.css'

function TitleCard({title, category}) {

    const cardRef =useRef();
    const handleWheel= (event) =>{
        event.preventDefault();
        cardRef.current.scrollLeft =+ event.deltaY;
    }
    useEffect(()=>{
        cardRef.current.addEventListener('wheel', handleWheel);
    },[])

  return (
    <div className="titlecards">
        <h2>{title?title:'Popular in Netflix'}</h2>
        <div className="card-list" ref={cardRef}>
            {cardsData.map((card, index)=>{
                // without return didnt work
                return <div className="cardView" key={index}>
                    <img src={card.image} alt=''/>
                    <p>{card.name}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCard