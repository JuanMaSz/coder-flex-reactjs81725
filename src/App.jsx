import Navbar from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
import EmptyCart from './components/EmptyCart'
import { CartProvider } from './components/CartContext'
import Checkout from './components/Checkout'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos a mi App"}/>}/>
          <Route path='/category/:type' element={<ItemListContainer mensaje={"Filtrado"}/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<EmptyCart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App