import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [apiData, setApiData] = useState()

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDQwZjdjZWZjMTBhNTEwNjZhOWFhODY0ZTRiY2NlNCIsIm5iZiI6MTcxOTkwMTYzNy40MDIyOTQsInN1YiI6IjY2ODM5YmVkODA5YWU4MzNkODliMjI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjKVnBTd5xZckmSZ-X7hu-msT4RHf2hjBTI2-n6859Q'
      }
    };

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => {
          console.log("edit-response", response);
          if (response.results && response.results.length > 0) {
            setApiData(response.results[0]);
          }
        })
        .catch(err => console.error(err));
    }, [id]);
      
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate("/")}}/>
        {/* iframe -> to embed specific content like external ads, videos, tags, or other interactive elements into the page. */}
        {apiData && (
              <>
                <iframe
                  width='90%' height='90%'
                  title='trailer'
                  src={`https://www.youtube.com/embed/${apiData.key}`}
                  frameBorder="0"
                  allowFullScreen
                >
                </iframe>
                <div className="player-info">
                    <p>{apiData.published_at}</p>
                    <p>{apiData.name}</p>
                    <p>{apiData.type}</p>
                </div>
              </>
            )}
    </div>
  )
}

export default Player