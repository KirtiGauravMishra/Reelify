import React,{useState,useEffect,useRef} from 'react';
import { posts } from '../data';
import './video.css';
import { Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import NearMeIcon from "@material-ui/icons/NearMe";
import Ticker from 'react-ticker';

const Video = ({id,src}) => {
  



  return (

    <div className ='video'>
     <video 
       
        className="video_player"
        id ={id}
        src= {src} 
     
         />

      <div className='shortsContainer'>
      <div className='shortsVideoTop'>

        <div className='shortsVideoTopIcon'>
          <ArrowBackIcon/>

        </div>
        <div className='shortsVideoTopIcon'>
          <MoreVertIcon />
        </div>
      </div>

       

       <div className='shortsVideoSideIcons'>
       <div className='shortsVideoSideIcon'>
         <ThumbUpIcon />
         <p>600</p>

         
         </div>

         <div className='shortsVideoSideIcon'>
         <ThumbDownIcon />
         <p>600</p>
         </div>
         <div className='shortsVideoSideIcon'>
         <InsertCommentIcon/>
         <p>600</p>
         </div>
         <div className='shortsVideoSideIcon'>
         <NearMeIcon />
         <p>600</p>
         </div>
         

       </div>
       <div className='shortsBottom'>
         <div className ='shortsDesc'>
           <Ticker mode ='smooth'>
             {({index})=>(
               <>
               <p className ='description'>
                     This is Description
               </p>
               </>
             )
             }
            
           </Ticker>

         </div>
         <div className ='shortDetails'>
           <Avatar />
           <p>channel Name</p>
           <button>
             Subscribe
           </button>
         </div>
       </div>
      </div>
     
     

    </div>
  )
}

export default Video;