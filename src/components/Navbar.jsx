import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
const Navbar = () => {
    const arrayList =({name:'random'})
    return(
        <nav className="nav-container">
            <NavLink to="/">
                <img src="../logo.png" alt="Logo Rabbit Games" className="logo" />
            </NavLink>
            <NavLink href="" className="pages" to="/category/nuevos">Nuevos</NavLink>
            <NavLink href="" className="pages" to="/category/mas vendidos">Mas vendidos</NavLink>
            <NavLink href="" className="pages" to="/category/ofertas">Ofertas</NavLink>
            <CartWidget counter={5} lata={arrayList}/>
        </nav>
    )
}

export default Navbar