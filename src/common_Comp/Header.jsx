import { useContext } from "react"
import { Link } from "react-router-dom"
import Mycontext from "../context/Mycontext"

function Header() {

  let{a,b} = useContext(Mycontext)

    
  return (
    <header>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/usestate"}>usestate</Link>
    {a}{b}
    </header>
  )
}

export default Header