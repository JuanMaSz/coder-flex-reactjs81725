const products = [
    {
        id:'01',
        name:'Teclado RGB',
        description:'Este teclado gamer retroiluminado es ideal para jugadores que buscan estilo y funcionalidad. Ofrece iluminación RGB y conexión estable mediante cable USB, brindando precisión y durabilidad en cada partida. Su construcción resistente y su efecto de luces dinámicas elevan la experiencia de juego, combinando rendimiento y estética en un solo periférico.',
        stock:5,
        price:19000,
        category:'nuevos',
        img:'https://acdn-us.mitiendanube.com/stores/001/593/430/products/1-2caf107220a4a2c03717659126237396-1024-1024.webp'
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