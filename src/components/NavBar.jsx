import brandLogo from "../assets/imgs/logo.png"
import profilePicture from "../assets/imgs/profile-picture.png"

const NavBar = () => {
  const theme = "light";
  return (
     <nav>
      <img src={brandLogo} alt="brand logo" />
      <div>
        <i class={`fa-solid fa-${theme ==="light" ? "moon" : "circle"}`}></i>
        <hr />
        <img src={profilePicture} alt="user's profile picture" className="profile-picture"/>
      </div>
    </nav>
  )
}

export default NavBar
