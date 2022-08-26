import React from 'react'
import MovieCard from './MovieCard';
// import { VscDebugStart } from 'react-icons/fa';

function MovieList({movies,searchFilter}) {
  return (
      <div>
        <div className="container--content">
            <div className="row">
            {movies.filter(movie => {
              if (searchFilter === ""){
                return movie;
              }
              else if (movie.nameMovie.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())){
                return movie;
              }
              return 0;
            }).map((movie, i) => <MovieCard key={i}  movie={movie}/>)}
              </div>
        </div>
       


      </div>
  )
}

export default MovieList