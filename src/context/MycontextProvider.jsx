import { useState } from 'react'
import Mycontext from './Mycontext'

function MycontextProvider({children}) {
    let a = 200
    let b = 30

    
    let [count,setCount] = useState(0)



    // function addFun(){
    //    setCount(count + 1) 
    // }
    
    
    
    
    
    
    
    let providingData = {a,b,count,setCount}



  return (
    <Mycontext.Provider  value={providingData}>
        {children}
    </Mycontext.Provider>
  )
}

export default MycontextProvider