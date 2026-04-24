import { useState } from "react"
import brandLogo from "../assets/imgs/logo.png"
import profilePicture from "../assets/imgs/profile-picture.png"

const NavBar = ({onTheme, light}) => {
 
  return (
     <nav>
      <img src={brandLogo} alt="brand logo" />
      <div>
        <i class={`fa-solid fa-${light ? "moon" : "circle"}`} onClick={onTheme}></i>
        <hr />
        <img src={profilePicture} alt="user's profile picture" className="profile-picture"/>
      </div>
    </nav>
  )
}

export default NavBar
