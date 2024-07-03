import React from 'react'
import yt_icon from "../../assets/youtube_icon.png"
import inst_icon from "../../assets/instagram_icon.png"
import twit_icon from "../../assets/twitter_icon.png"
import fb_icon from "../../assets/facebook_icon.png"
import "./Footer.css"

function Footer() {
  return (
    <div className='Footer'>
      <div className="footerIcon">
        <img src={yt_icon} alt=""/>
        <img src={inst_icon} alt=""/>
        <img src={twit_icon} alt=""/>
        <img src={fb_icon} alt=""/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor Relationship</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookoe preferences</li>
        <li>Corporate Informations</li>
        <li>Contact Us</li>
      </ul>
      <p className='footerCopyright'>© 1997-2023 Netflix, Inc. </p>
    </div>
  )
}

export default Footer