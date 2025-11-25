import Navbar from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos a mi App"}/>}/>
      <Route path='/category/:type' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App