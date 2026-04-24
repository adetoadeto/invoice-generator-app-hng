import { useState } from "react"
import brandLogo from "../assets/imgs/logo.png"
import profilePicture from "../assets/imgs/profile-picture.png"

const NavBar = ({toggleTheme, light}) => {
 
  return (
     <nav>
      <img src={brandLogo} alt="brand logo" />
      <div>
        <i className={`fa-solid fa-${light ? "moon" : "circle"}`} onClick={toggleTheme}></i>
        <hr />
        <img src={profilePicture} alt="user's profile picture" className="profile-picture"/>
      </div>
    </nav>
  )
}

export default NavBar
