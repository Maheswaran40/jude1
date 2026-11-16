import { useNavigate } from "react-router-dom"
import products from "../json/data"

function Home() {


  let navigate = useNavigate()

  return (
    <div id="home">


      <div className="container">
        <div className="row">
          {products.map((v, i) => (
            <div className="col-lg-4" key={i} onClick={()=>navigate(`product/${v.id}`)}>
              <div className="card">
                <img src={v.image} height="200px" width="100%" alt="" />
                <div className="card-body">
                  <span>name:{v.name}</span><br />
                  <span>price:{v.price}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home