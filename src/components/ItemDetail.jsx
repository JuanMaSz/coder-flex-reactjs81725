import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h2>Detalle del producto: {detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name} />
        <p>${detalle.price},00</p>
        <p>{detalle.description}</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
        <ItemCount stock={detalle.stock}/>
    </div>
  )
}

export default ItemDetail