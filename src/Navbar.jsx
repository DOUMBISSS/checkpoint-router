import React from 'react';
import {Link} from 'react-router-dom';

function Navbar ({setSearchFilter}) {
            
    const handlesetSearchFilter = (event) => {
      let value = event.target.value;
      setSearchFilter(value);
    }

    return (
    <header>
     <div className="navbar">
         <div className="navbar--left">
             <h1>React Movie Studio</h1>
         </div>
         <div className="navbar--right">
             <div className='categories'>
               <ul>
                 <li><Link className='link' to="/">Accueil</Link></li>
                 <li><Link className='link' to="/series">Series</Link></li>
                 <li><Link className='link' to="/films">Films</Link></li>
                 <li><Link className='link' to="/nouveautes">Nouveautés</Link></li>
                 <li>Ma liste</li>
                 <li>Téléchargement</li>
                 <li>Sign Up</li>
               </ul>
             </div>
             <input type="text" placeholder="Rechercher un film" onChange={handlesetSearchFilter} />
         </div>
     </div>
            
   </header>
    );
}

export default Navbar;
