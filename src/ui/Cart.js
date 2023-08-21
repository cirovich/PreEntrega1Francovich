import cart from "../assets/cart.svg"
import {Link} from "react-router-dom"

function Cart() {
    return (
        <><Link href="/Carrito"><img alt="Carrito" src={cart}></img></Link>1</>
    ) 
  }
  
export default Cart;