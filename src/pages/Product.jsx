import { useParams } from "react-router-dom"
import products from "../json/data"

function Product() {

let {navid} = useParams() 

let selectedProduct = products.find((v)=>v.id == navid)

  return (
    <div>
       <div className="row">
        <div className="col-lg-6">
            <img src={selectedProduct.image} height="200px" width="100%" alt="" />
        </div>
        <div className="col-lg-6">

        <div className="card">
            <div className="card-body">
                <span>name:{selectedProduct.name}</span>
                <span>price:{selectedProduct.price}</span>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Product