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

const Video = (id, src) => {

  const[playing, setplaying ]= useState(false);
  const videoRef=useRef(null);
  return (
    <div classname ='video'>
     <video 
        id={id}
        className="video__player"
     
        src= 'https://rr1---sn-5hne6nzk.googlevideo.com/videoplayback?expire=1651107900&ei=3JNpYpf2H6LIx_APv92j0AY&ip=193.8.231.70&id=o-ADQPCIhnp-0LSeBzfttvn5SPoZNlOnEpa-hijGu4AnTR&itag=18&source=youtube&requiressl=yes&mh=PG&mm=31%2C29&mn=sn-5hne6nzk%2Csn-5hnekn76&ms=au%2Crdu&mv=m&mvi=1&pl=24&pcm2=yes&initcwndbps=336250&vprv=1&mime=video%2Fmp4&gir=yes&clen=914252&ratebypass=yes&dur=17.237&lmt=1651071257581602&mt=1651085812&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANH5V1gyIH5YnGl6klJv2h3psObBfOm21dJfbh-zh80-AiEAj6_qgahUctVwdqQiAMk_yA6Yh_cTYZVmcTIs3RSG0Ww%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgKjFTvIsZlfQrw7KJ0AiUiBv5q1EDvNkfToIH9RRar7MCIATG-HV6rv889HTvhXymm-HVwC9uAfbC4gpUUnH8GXlj'
      />
       <video 
        id={id}
        className="video__player"
     
        src= 'https://rr1---sn-5hne6nzk.googlevideo.com/videoplayback?expire=1651107900&ei=3JNpYpf2H6LIx_APv92j0AY&ip=193.8.231.70&id=o-ADQPCIhnp-0LSeBzfttvn5SPoZNlOnEpa-hijGu4AnTR&itag=18&source=youtube&requiressl=yes&mh=PG&mm=31%2C29&mn=sn-5hne6nzk%2Csn-5hnekn76&ms=au%2Crdu&mv=m&mvi=1&pl=24&pcm2=yes&initcwndbps=336250&vprv=1&mime=video%2Fmp4&gir=yes&clen=914252&ratebypass=yes&dur=17.237&lmt=1651071257581602&mt=1651085812&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANH5V1gyIH5YnGl6klJv2h3psObBfOm21dJfbh-zh80-AiEAj6_qgahUctVwdqQiAMk_yA6Yh_cTYZVmcTIs3RSG0Ww%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgKjFTvIsZlfQrw7KJ0AiUiBv5q1EDvNkfToIH9RRar7MCIATG-HV6rv889HTvhXymm-HVwC9uAfbC4gpUUnH8GXlj'
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