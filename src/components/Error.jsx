import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div>
        <h1>La pagina no existe! 😢</h1>
        <Link className="btn btn-dark" to='/'>Volver a home</Link>
    </div>
  )
}

export default Error