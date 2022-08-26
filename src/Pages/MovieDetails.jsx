import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';

function MovieDetails({movies}) {

  let id = parseInt(useParams().id);
  let movie =movies.find(movie => movie.id === id);
  console.log(process.env.REACT_APP_PUBLIC_URL)
  return (
       <div>
       <Navbar/>
              <div className='movie--cards'>
                  <div className='movie--cards--content'>
                  <div className='movie--cards--images'>
                        <div className='movie--cards--images--box'>
                          {/* <img src={process.env.REACT_APP_PUBLIC_URL + movie.img} alt="" /> */}
                          <iframe 
                          width="756" 
                          height="425" 
                          src={movie.videoLink} 
                          title="Didi B ft. Jr Low, Tam Sir  - En Haut (Official Music Video)" 
                          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullscreen>

                          </iframe>
                        </div>
                  </div>
                <div className='movie--cards--description'>
                    <div className='movie--cards--description--content'>
                      <div className='movie--cards--description--content--header'>
                      <h2 className='title--movie'>{movie.nameMovie}</h2>
                      </div>

                      <div className='movie--descriprion'>
                        <p>1992. Colombie. Cataleya, 9 ans, assiste au meurtre de ses parents. Échappant de justesse au massacre, elle se réfugie aux États-Unis, chez son oncle Emilio, un gangster. 15 ans plus tard, elle travaille pour lui comme tueuse à gages. Elle signe ses meurtres d'une orchidée dessinée sur le torse de ses victimes : un message à l'intention des assassins de ses parents. Car Cataleya est bien décidée à aller jusqu'au bout de sa vengeance… quitte à perdre tous ceux qu'elle aime.</p>
                        <h3>Duration:{movie.Duration} </h3>
                        <h3>Date d'ajout: 22/08/2022</h3>
                        <h3>Genres : <span>Sexe, Drogue, Dramatique{} </span></h3>
                        <h3>videoLink:<span>{movie.videoLink} </span></h3>
                        <div className='limited--age'>
                          <p>18+</p>
                        </div>
                      </div>

                      {/* <div className='movie--cards--description--content--footer'>
                          <button className='btn--details'>Bande annonce</button>
                          <button className='btn--play'>Play</button>
                      </div> */}
                    </div>
                </div>
            </div>
            <div className='btn--return'>
            <button><Link className='link' to="/" >Retour a l'accueil</Link> </button>
            </div>
      </div>
      </div>
  )
}

export default MovieDetails;