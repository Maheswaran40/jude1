import { useNavigate } from "react-router-dom"
import products from "../json/data"
import { useContext, useEffect, useState } from "react"
import Mycontext from "../context/Mycontext"

function Home() {

  let {a,b,count} = useContext(Mycontext)

  let[quantity,setQuantity] = useState(Array(products.length).fill(0))
  let navigate = useNavigate()

  function addFun(index){
    let newCount = [...quantity]
    newCount[index] += 1
    setQuantity(newCount)

  }
  function minusFun(){
    setQuantity(quantity - 1)

  }

   function apiFun(){
    console.log("get data");
    
  }

  useEffect(() => {
    console.log("home function 1st render");
    apiFun()
  }, [console.log("render")])

 
  
console.log("without use effect");

  
  return (
    <div id="home">


      <div className="container">
        <div className="row">
          {products.map((v, i) => (
            <div className="col-lg-4" key={i} >
              <div className="card">
                <img src={v.image} height="200px" width="100%" alt="" onClick={()=>navigate(`product/${v.id}`)} />
                <div className="card-body">
                  <span>name:{v.name}</span><br />
                  <span>price:{v.price}</span><br />
                  <button onClick={()=>addFun(i)}>+</button>
                  <span>quantity : {quantity[i]}</span>
                  <button onClick={minusFun}>-</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
          {count}
          <span>{a}{b}</span>
    </div>
  )
}

export default Home