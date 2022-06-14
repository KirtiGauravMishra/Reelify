import React,{useEffect,useState} from 'react';
import Navbar from './Components/Navbar';
import Video from './Pages/Video';
import './aapi.css';
import Data from './data';

//bara (Video) = Data
const App = () => {
 

  return (

   <div> <Navbar />

    <div className='app'>
        <div className='app_videos'>   <Video/> </div>
      
     
    </div>
    </div>
  
  )
}

export default App;