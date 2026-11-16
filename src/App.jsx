import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Header from "./common_Comp/Header"
import Footer from "./common_Comp/Footer"
import Product from "./pages/Product"
import UseState from "./pages/UseState"

function App() {
  return (
    <>


    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/usestate" element={<UseState/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product/:navid" element={<Product/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App