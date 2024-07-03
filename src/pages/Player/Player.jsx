import React, { useEffect } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Navigate, useParams } from 'react-router-dom'

function Player() {
    const {id} = useParams();
    const [apiData, setApiData] = useEffect({
        name:"",
        key:"",
        published_at:"",
        type:""
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDQwZjdjZWZjMTBhNTEwNjZhOWFhODY0ZTRiY2NlNCIsIm5iZiI6MTcxOTkwMTYzNy40MDIyOTQsInN1YiI6IjY2ODM5YmVkODA5YWU4MzNkODliMjI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjKVnBTd5xZckmSZ-X7hu-msT4RHf2hjBTI2-n6859Q'
        }
    };
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    },[])
      
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={Navigate("/")}/>
        {/* iframe -> to embed specific content like external ads, videos, tags, or other interactive elements into the page. */}
          <iframe
              width='90%' height='90%'
              title='trailer'
              src={`https://www.youtube.com/embed/${apiData.key}`}
              frameborder="0"
              allowFullScreen
            >
          </iframe>
        <div className="player-info">
            <p>{apiData.published_at}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player