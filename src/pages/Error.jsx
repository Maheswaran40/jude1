import { Link } from "react-router-dom"

function Error() {
  return (
    <>
    <center><h1> page not found</h1></center>
    <Link to={"/"}>Back</Link>
    </>
  )
}

export default Error