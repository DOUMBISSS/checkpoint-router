import { useState } from 'react';
import MovieList from '../MovieList';
import AddMovie from '../AddMovie';
import Navbar from '../Navbar';
import '../App.css';
// import {Routes,Route,Link} from 'react-router-dom';


function Home ({movies,setMovies}) {
        
    const addMovie = (movie) =>
      {
        let newState = [...movies];
        newState.push(movie);
        setMovies(newState);
      }
      const [searchFilter, setSearchFilter] = useState("");
    
    return (
        <div>
        <Navbar setSearchFilter={setSearchFilter}/>
        <AddMovie addNewMovie={addMovie}/>
        <MovieList movies={movies} searchFilter={searchFilter}/>
      </div>
    )
  }

  export default Home;