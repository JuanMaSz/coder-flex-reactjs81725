import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'

const ItemDetail = ({detalle}) => {
  const { addItem, cart } = useCart()
  const navigate = useNavigate()

  const itemInCart = cart.find(item => item.id === detalle.id)
  const stockActual = detalle.stock - (itemInCart?.quantity || 0)

  const handleOnAdd = (quantity) => {
      addItem(detalle, quantity)
      navigate('/cart')
  }

  return (
    <div className='container d-flex flex-column align-items-center'>
        <h2>Detalle del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} style={{ width: '100%', maxWidth: '400px', height: '400px', objectFit: 'cover', objectPosition: 'center' }}/>
        <p>${detalle.price},00</p>
        <p>{detalle.description}</p>
        <p>Stock disponible: {stockActual} unidades</p>
        <ItemCount stock={stockActual} onAdd={handleOnAdd}/>
    </div>
  )
}

export default ItemDetail