import React from 'react';
import './app.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
        
        <span className='Logo'> Reelify</span>
        <ul className='list'>
            <li className='listItem'>
                <img src='https://cdn.pixabay.com/photo/2017/02/20/13/31/alphabet-2082503_960_720.png' alt=' ' className='avatar' />
            </li>
            <li className='listItem' >Kirti Gaurav</li>
            <li className='listItem' >Logout</li>

        </ul>
        
        </div>
  )
}

export default Navbar;