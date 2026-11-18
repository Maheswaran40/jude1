import { useContext } from "react"
import Mycontext from "../context/Mycontext"

function Contact() {
  let {count,setCount} = useContext(Mycontext)
  return (
   <>
    <div id="contact">Contact


    <button onClick={()=>setCount(count+1)}>+</button>
    <h1>{count}</h1>


    </div>
   
   </>
  )
}

export default Contact