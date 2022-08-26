import React from 'react';
import { useState } from 'react';
// import { uid } from 'uid';

function AddMovie({addNewMovie}) {

    const [name, setName] = useState("");
        const addMovie = () => {
            const movie = {
            // id :uid(),
            img : "day.jpg",
            nameMovie :name,
            videoLink : videoLink,
            Duration :duration
        }
            addNewMovie(movie);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [videoLink, setvideoLink] = useState("");
            
    const handlevideoLink = (event) => {
        setvideoLink(event.target.value);
    }
    const [duration, setDuration] = useState("");
            
    const handleDuration = (event) => {
        setDuration(event.target.value);
    }


  return (
    <div className="search--bar">
        <input type="text" placeholder='movieName' onChange={handleName}/>
        <input type="url"placeholder='Link' onChange={handlevideoLink}/>
        <input type="url"placeholder='Duration' onChange={handleDuration}/>
        <input type="file" />
        <button className="add--btn--movie" onClick={addMovie}>Ajouter un film</button>
        </div>  
  )
}

export default AddMovie