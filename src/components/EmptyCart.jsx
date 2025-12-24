import React from 'react'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    const { cart, clear, removeItem, total } = useCart()

    if (cart.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <h1>El carrito está vacío 😢</h1>
                <Link className="btn btn-dark mt-3" to='/'>Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            {cart.map((prod) => (
                <div key={prod.id} className='d-flex justify-content-between align-items-center border p-3 mb-2'>
                    <img src={prod.img} alt={prod.name} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                    <h3>{prod.name}</h3>
                    <p>Cantidad: {prod.quantity}</p>
                    <p>Precio unitario: ${prod.price}</p>
                    <p>Subtotal: ${prod.price * prod.quantity}</p>
                    <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
            ))}
            <h3 className='mt-3'>Total Compra: ${total()}</h3>
            <div className="d-flex gap-2 mt-3">
                <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
                <Link to='/checkout' className='btn btn-success'>Terminar compra</Link>
            </div>
        </div>
    )
}

export default EmptyCart