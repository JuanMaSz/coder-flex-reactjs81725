import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState(null) 
    const [loading, setLoading] = useState(true)
    const { id } = useParams() 
    const [invalid, setInvalid] = useState(false)

    useEffect(()=>{
      setLoading(true)
      setInvalid(false)
      const docRef= doc(db, "products", id)
      getDoc(docRef)
      .then((res)=> {
        if (res.exists()) {
            setDetalle({id:res.id, ...res.data()})
        } else {
            setInvalid(true)
        }
      })
      .catch((error)=>{
        console.log(error)
        setInvalid(true)
      })
      .finally(()=>setLoading(false))
    },[id])

    if (loading) return <h2>Cargando...</h2>

    if (invalid) {
      return(
        <div>
          <h1>El producto no existe! 😢</h1>
          <Link className="btn btn-dark" to='/'>Volver a home</Link>
        </div>
      )
      
    }

    if (!detalle) return <h2>Error inesperado: No se encontró el detalle</h2>

  return (
    <ItemDetail detalle={detalle}/>
  )
}

export default ItemDetailContainer