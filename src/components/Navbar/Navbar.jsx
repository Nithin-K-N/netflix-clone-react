import React from 'react'
import logo from '../../assets/netflix-emblam.png'
import searchIcon from '../../assets/search.png'
import bellIcon from '../../assets/bell.png'
import droparrowIcon from '../../assets/down-arrow.png'
import profilePic from '../../assets/netflix-profilePic.jpg'
import './Navbar.css'
function Navbar() {

  return (
    <div className='navbar'>
        <div className="navbar-left">
            {/* img is used not image */}
            <img
                // src='src\assets\netflix-emblam.png' 
                src={logo}
                alt="" 
            />
            <ul>
                <li>Home</li>
                <li>TV shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My list</li>
                <li>Browser by Language</li>
            </ul>
            
        </div>
        <div className="navbar-right">
            <img src={searchIcon} alt='' className='icons'/>
            <p>childern</p>
            <img src={bellIcon} alt='' className='icons'/>
            <div className="navbar-profile">
                <img src={profilePic} alt="" className='profilePic'/>
                <img src={droparrowIcon} alt='' className='droparrow'/>
                <div className="dropdown">
                    <p>sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar