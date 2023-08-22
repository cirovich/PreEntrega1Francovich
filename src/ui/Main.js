import Container from "../components/Container"
import {Routes,Route} from "react-router-dom"

function Main() {
  return (
    
    <Routes>
    <Route path="/" element={<Container/>}/>
    <Route path="/PreEntrega1Francovich" element={<Container/>}/>
    <Route path="/cat/:id" element={<p>Producto 1</p>}/>
    <Route path="/Carrito" element={<p>Carrito</p>}/>
    </Routes>
    
 );
  }
export default Main;