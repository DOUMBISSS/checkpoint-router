import Navbar from '../Navbar';
// import {Routes,Route,Link} from 'react-router-dom';


function Films ({setSearchFilter}) {    
    return (
        <div>
        <Navbar setSearchFilter={setSearchFilter}/>
      </div>
    )
  }

  export default Films;