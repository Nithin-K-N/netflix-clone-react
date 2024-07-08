import React, { useEffect, useRef } from 'react'
import logo from '../../assets/netflix-emblam.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import droparrowIcon from '../../assets/caret_icon.svg'
import profilePic from '../../assets/netflix-profilePic.jpg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../firebase'

function Navbar() {

    // const nav = useNavigate()
    const navRef = useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

  return (
    <div ref={navRef} className='navbar'>
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
                <div className="dropdown" onClick={logOut()}>
                    <p>sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar