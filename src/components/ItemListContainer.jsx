import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({mensaje}) => {
    const[data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {type}= useParams()

    useEffect(()=>{
        setLoading(true)
        const prodCollection = collection(db, "products")
        const q = type ? query(prodCollection, where("category", "==", type)) : prodCollection

        getDocs(q)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[type])

    if(loading) return <h2>Cargando...</h2>

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