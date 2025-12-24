import { useCart } from "./CartContext"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    return(
        <div>
            <span><img src="/carrito.png" alt="Carrito" className="logo-carrito" /></span>
            <span style={{color:'white'}}>{totalQuantity()}</span>
        </div>

    )
}

export default CartWidget