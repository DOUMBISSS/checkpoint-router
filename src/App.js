import './App.css';
// import MovieList from './MovieList';
// import AddMovie from './AddMovie';
// import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import Series from './Pages/Series'
import Nouveautes from './Pages/Nouveautes'
import Films from './Pages/Films'
import { useState } from 'react';
// import { uid } from 'uid';


function App({setSearchFilter}) {
  const [movies, setMovies] = useState([
    {id :1, nameMovie : "Transformers",img:'Transformers.jpeg',videoLink:"https://www.youtube.com/embed/e0K3OjNHTtA",Duration : "1:45 min"},
    {id :2, nameMovie : "Colombiana",img:'colombiana.jpg',videoLink:"https://www.youtube.com/embed/VHI2QPzlThk",Duration : "1:34min"},
    {id :3, nameMovie : "Blacklist",img:'Blackilist.png',videoLink:"https://www.youtube.com/embed/DllhYcWBHKg",Duration : "1:04min"},
    {id :4, nameMovie : "Fast and Furious",img:'fast .jpg',videoLink:"https://www.youtube.com/embed/DllhYcWBHKg",Duration : "1:50min"},
    {id :5, nameMovie : "Good Doctors",img:'good doctor.webp',videoLink:"https://www.youtube.com/embed/4O_S0OQW8oM",Duration : "2:34min"}
    
    ])
console.log(movies.id)
  return (
    <Routes>
    <Route path="/" element={<Home movies={movies} setMovies={setMovies} />}/>
    <Route path='/details/:id' element={<MovieDetails movies ={movies} setSearchFilter={setSearchFilter}/>} />
    <Route path='/series' element={<Series/>} />
    <Route path='/nouveautes' element={<Nouveautes/>} />
    <Route path='/films' element={<Films/>} />
  </Routes>
  );
}

export default App;
