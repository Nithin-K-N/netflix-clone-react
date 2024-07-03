import React, { useEffect, useRef, useState } from 'react'
import cardsData from '../../assets/cards/Cards_data'
import './titleCard.css'
//  1:00:05

function TitleCard({title, category}) {

    const [apiData, setApiData] = useState([])

    // useRef() -> Hook that lets you reference a value that’s not needed for rendering.
    const cardRef =useRef();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDQwZjdjZWZjMTBhNTEwNjZhOWFhODY0ZTRiY2NlNCIsIm5iZiI6MTcxOTkwMTYzNy40MDIyOTQsInN1YiI6IjY2ODM5YmVkODA5YWU4MzNkODliMjI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjKVnBTd5xZckmSZ-X7hu-msT4RHf2hjBTI2-n6859Q'
        }
    };

    const handleWheel= (event) =>{
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY;
    }
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
        cardRef.current.addEventListener('wheel', handleWheel);
    },[])

  return (
    <div className="titlecards">
        <h2>{title?title:'Popular in Netflix'}</h2>
        <div className="card-list" ref={cardRef}>
            {apiData.map((card, index)=>{
                // without return didnt work
                return <div className="cardView" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
                    <p>{card.title}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default TitleCard