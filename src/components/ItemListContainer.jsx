import { useEffect, useState } from "react"
import { getProducts } from "../mock/Asynmock"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({mensaje}) => {
    const[data, setData] = useState([])
    const {type}= useParams()

    useEffect(()=>{
        getProducts()
        .then((res) => {
            if (type) {
                setData(res.filter((prod) => prod.category === type))
            } else {
                setData(res)
            }
        })
        .catch((error)=> console.log(error))
    },[type])
    return(
        <div>
            <h1 className="msj-bienvenida">{mensaje}</h1>
            <div className= 'd-flex flex-wrap justify-content-around align-items-start gap-3'>
            {/*data.map((prod)=> <p key={prod.id}>{prod.name}</p>)*/}
            <ItemList data={data}/>
            </div>
        </div>
        

    )
}
export default ItemListContainer