import React, { useState } from 'react'
import { useCart } from './CartContext'
import { db } from '../service/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirmacion: ''
    })
    const [error, setError] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clear } = useCart()

    const validate = () => {
        if (!user.nombre || !user.apellido || !user.telefono || !user.email || !user.emailConfirmacion) {
            setError('Por favor completa todos los campos obligatorios')
            return false
        }
        if (user.email !== user.emailConfirmacion) {
            setError('Los emails no coinciden')
            return false
        }
        setError('')
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

        const order = {
            buyer: {
                nombre: user.nombre,
                apellido: user.apellido,
                telefono: user.telefono,
                email: user.email
            },
            items: cart,
            total: total(),
            date: serverTimestamp()
        }

        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    if (orderId) {
        return (
            <div className='container mt-5 text-center'>
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <Link to='/' className='btn btn-primary'>Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className='container mt-5'>
            <h2>Terminar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3"><label className="form-label">Nombre</label><input type="text" className="form-control" name="nombre" onChange={handleChange} /></div>
                <div className="mb-3"><label className="form-label">Apellido</label><input type="text" className="form-control" name="apellido" onChange={handleChange} /></div>
                <div className="mb-3"><label className="form-label">Celular</label><input type="number" className="form-control" name="telefono" onChange={handleChange} /></div>
                <div className="mb-3"><label className="form-label">Email</label><input type="email" className="form-control" name="email" onChange={handleChange} /></div>
                <div className="mb-3"><label className="form-label">Confirmar Email</label><input type="email" className="form-control" name="emailConfirmacion" onChange={handleChange} /></div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-success">Generar Orden</button>
            </form>
        </div>
    )
}

export default Checkout