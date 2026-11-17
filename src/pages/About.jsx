import { useEffect, useRef } from "react"

function About() {

  let conutRef = useRef()
  let focurRef = useRef()

  function addFun(){
    conutRef.current.innerHTML ++
  }

  useEffect(()=>(
    focurRef.current.focus()
  ),[])

  return (
    <div id="about">


      <h1 ref={conutRef}>0</h1>
    <button onClick={addFun}>+</button>


    <form >
      <input type="text" ref={focurRef}/>
    </form>
    </div>
  )
}

export default About