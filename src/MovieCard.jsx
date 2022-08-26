import React from 'react'
// import { FaDropbox } from 'react-icons/fa';
import {Link} from 'react-router-dom';
// import { uid } from 'uid';

function MovieCard({movie}) {
  return (
    <div>
    <div className="cards">
          <div className="cards--images">
          <div className="cards--images--box">
             <img src={movie.img} alt="" />
          </div>
          </div>
          <div className="cards--content">
                <div className='cards--content--box'>
                <h3>{movie.nameMovie}</h3>
                <h4 className='duration'>Duration :{movie.Duration}</h4>
                </div>
                <div className='btn--movie'>
                  {/* <button className='btn--play'><Link className='link' to={movie.videoLink}>Play</Link></button> */}
                  <button className='btn--details'><Link className='link' to={`details/${movie.id}`} >Play</Link> </button>
                </div>
          </div>
    </div>

 </div>
  )
}

export default MovieCard