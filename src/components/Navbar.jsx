import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
    const arrayList =({name:'random'})
    return(
        <nav className="nav-container">
            <NavLink to="/">
                <img src="/logo.png" alt="Logo Rabbit Games" className="logo" />
            </NavLink>
            <NavLink className="pages" to="/category/nuevos">Nuevos</NavLink>
            <NavLink className="pages" to="/category/mas vendidos">Mas vendidos</NavLink>
            <NavLink className="pages" to="/category/ofertas">Ofertas</NavLink>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
                <CartWidget />
            </Link>
        </nav>
    )
}

export default Navbar