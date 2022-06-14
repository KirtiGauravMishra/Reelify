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
     
        src=  'https://rr4---sn-1gi7znek.googlevideo.com/videoplayback?expire=1651232641&ei=IXtrYtuBJLDIx_APx6aHyAo&ip=154.95.32.234&id=o-AMHDHnwTBj6YFrmpNGa14cKuprD98smsP4iob3_ZujTk&itag=18&source=youtube&requiressl=yes&mh=7R&mm=31%2C26&mn=sn-1gi7znek%2Csn-aigl6ner&ms=au%2Conr&mv=m&mvi=4&pl=24&pcm2=no&initcwndbps=273750&vprv=1&mime=video%2Fmp4&gir=yes&clen=1626802&ratebypass=yes&dur=15.061&lmt=1646210210803700&mt=1651210868&fvip=1&fexp=24001373%2C24007246&c=ANDROID&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIdRO7xMabAkKZNe9VLOtnH9Dt2NNPO-ti7TFDFjRS8VAiEA0g5DkPSWJQMI68mfYUVvx5JjPTEfExoGFF5V-3sOlq8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJhPFP-QCPulTpahhICvwM3-bEvOKRiTnsiYk-VUk_sVAiAv6yjVWlp2iQt2Hp5X_IVXyfprm97ZXPI60M6uZ4253w%3D%3D'
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