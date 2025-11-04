import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <a href="">
                <img src="../logo.png" alt="Logo Rabbit Games" className="logo" />
            </a>
            <a href="" className="pages">Nuevos</a>
            <a href="" className="pages">Mas vendidos</a>
            <a href="" className="pages">Ofertas</a>
            <CartWidget counter={5}/>
        </nav>
    )
}

export default Navbar