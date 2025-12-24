import { createContext, useState, useContext } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    clear: () => {},
    removeItem: () => {},
    total: () => 0,
    totalQuantity: () => 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else {
                    return prod
                }
            }))
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)