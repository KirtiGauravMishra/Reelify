import React,{useEffect,useState} from 'react';
import Navbar from './Components/Navbar';
import Video from './Pages/Video';
import './aapi.css';

import Data from './data';




//bara (Video) = Data
// we will pass the data of our videos here 
const App = () => {
 const [ytvideos, setytvideos]= useState([]);


useEffect(()=>{
  setytvideos(Video);
}, []);


  return (



   <div> <Navbar />

    <div className='app'>
        <div className='app_videos'>   <Video/>

        {Data.map((vid) => (
          <Video
            id={vid.id}
            src={vid.url}
          />
        ))}
          
        
        
         </div>
      
    </div>
    </div>
  
  );
}

export default App;