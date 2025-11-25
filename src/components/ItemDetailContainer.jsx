import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getOneProduct } from '../mock/Asynmock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({}) 
    const { id } = useParams() 
    useEffect(()=>{
        getOneProduct(id)
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    }, [id])

    
    if (!detalle) return <h2>Cargando...</h2>

  return (
    <ItemDetail detalle={detalle}/>
  )
}

export default ItemDetailContainer