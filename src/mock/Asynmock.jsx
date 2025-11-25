const products = [
    {
        id:'01',
        name:'Random 1',
        description:'No se',
        stock:5,
        price:19000,
        category:'nuevos',
        img:'http://picsum.photos/198'
    },
    {
        id:'02',
        name:'Random 2',
        description:'No se',
        stock:32,
        price:32000,
        category:'mas vendidos',
        img:'http://picsum.photos/197'
    },
    {
        id:'03',
        name:'Random 3',
        description:'No se',
        stock:24,
        price:20000,
        category:'nuevos',
        img:'http://picsum.photos/196'
    },
    {
        id:'04',
        name:'Random 4',
        description:'No se',
        stock:9,
        price:14000,
        category:'ofertas',
        img:'http://picsum.photos/195'
    },
]

let error = false
export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }
            else{
            resolve(products)
            }
        },3000)
    })
}
export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let product= products.find((item)=> item.id === id)
            resolve(product)
        },3000)
    })
}