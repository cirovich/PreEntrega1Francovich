import cart from "../assets/cart.svg"
import {NavLink} from "react-router-dom"

function Cart() {
    return (
        <NavLink to="/Carrito"><img alt="Carrito" src={cart}></img>1</NavLink>
    ) 
  }
  
export default Cart;