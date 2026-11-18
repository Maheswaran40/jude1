import { useContext } from "react"
import Mycontext from "../context/Mycontext"

function Footer() {
  let {a} =useContext(Mycontext)
  return (
    <footer>
        <h1>footer</h1> 
        {a}
    </footer>
  )
}

export default Footer