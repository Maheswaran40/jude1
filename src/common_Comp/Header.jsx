import { Link } from "react-router-dom"

function Header() {


    
  return (
    <header>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/usestate"}>usestate</Link>

    </header>
  )
}

export default Header