import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';

//PETICION API FUTURA
// const fetchDataProducts = async () => {
//     const data = await fetch("./src/api.json");
//     console.log(data)

// }
const dataBase = [{
                    "id": 1,
                    "codigo": "TPE01",
                    "titulo": "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
                    "precio": 1650,
                    "color": "incoloro",
                    "img": "images/inc.png",
                    "descripcion": [
                        "Se adaptan cómodamente al oído.",
                        "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
                        "Protegen del ingreso de agua al conducto auditivo.",
                        "Reducen 22 decibeles.",
                        "Incluye estuche para su almacenamiento."
                    ]

                }, 
                {
                    "id": 2,
                    "codigo": "TPE02",
                    "titulo": "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
                    "precio": 1650,
                    "color": "fluo",
                    "img": "images/fluo.png",
                    "descripcion": [
                        "Se adaptan cómodamente al oído.",
                        "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
                        "Protegen del ingreso de agua al conducto auditivo.",
                        "Reducen 22 decibeles.",
                        "Incluye estuche para su almacenamiento."
                    ]

                } ,
                {   
                    "id": 3,
                    "codigo": "TPE05",
                    "titulo": "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
                    "precio": 1650,
                    "color": "nude",
                    "img": "images/nude.png",
                    "descripcion": [
                        "Se adaptan cómodamente al oído.",
                        "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
                        "Protegen del ingreso de agua al conducto auditivo.",
                        "Reducen 22 decibeles.",
                        "Incluye estuche para su almacenamiento."
                    ]

                },
                {
                    "id": 4,
                    "codigo": "TPE03",
                    "titulo": "Tapones para oídos Goma Soft Expandible por 12 cajas (12 pares)",
                    "precio": 1224,
                    "color": "naranja",
                    "img": "images/soft.png",
                    "descripcion": [
                        "Protegen de ruidos molestos, transito vehicular,música, máquinas, etc.",
                        "Reducen 29 decibeles.",
                        "Se ajustan sellando el canal auditivo.",
                        "Tapones con cordón.",
                        "Incluye estuche para su almacenamiento."
                        
                    ]

                },
                {
                    "id": 5,
                    "codigo": "TPE04",
                    "titulo": "Tapones para oídos silicona Vulcanizada Hipoalergénica por 12 cajas (12 pares)",
                    "precio": 1260,
                    "color": "verde",
                    "img": "images/vulcan.png",
                    "descripcion": [
                        "Protegen de ruidos molestos, transito vehicular, música, máquinas, etc.",
                        "Protegen del ingreso de agua al conducto auditivo.",
                        "Reducen 26 decibeles.",
                        "Tapones con cordón.",
                        "Se adaptan cómodamente al oído. Máxima adherencia."
                        
                    ]

                },
                {
                    "id": 6,
                    "codigo": "TPE06",
                    "titulo": "Tapones para oídos SPLASH Silicona Moldeable por 12 cajas (24 pares)",
                    "precio": 1650,
                    "color": "amarillo fluo",
                    "img": "images/splash.png",
                    "descripcion": [
                        "Se adaptan cómodamente al oído. Máxima adherencia.",
                        "Protegen del ingreso de agua al conducto auditivo. Ayudan a prevenir infecciones.",
                        "Ideal para deportes acuáticos. Para uso en pileta, playa y ducha.",
                        "Incluye estuche para su almacenamiento.",
                        "Su color amarillo fluo permite localizarlos fácilmente en caso de extravío."
                    ]

                }]



const Products = () => {

const [dataProducts, setDataProducts] = useState();
const [loading , setLoading] = useState(false);



useEffect(()=>{
    //cuando entres a esta promise,dime que esta seteado en true
    setLoading(true)
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(dataBase), 5000);
    }).then(
        (dataResolve) => {
        setDataProducts(dataResolve);
        //pero una vez que la resuelva setea como false
        setLoading(false);
    })
}, [])
if(loading){
    return(
        <div className="position-absolute top-50 start-50 translate-middle" >
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
if(dataBase.length !== 0){
    console.log('array lleno')
};


    return ( 
        <>
            <h1 style={{marginTop:"70px"}}>productos</h1>
            <div className="row row-cols-3 container-fluid mx-2">
                <ProductsList dataProducts={dataProducts}/>
                
                {/* <Link to={`/products/${1}`}></Link>
                <Link to={`/products/${2}`}><ProductsList/></Link>
                <Link to={`/products/${3}`}><ProductsList/></Link>
                <Link to={`/products/${4}`}><ProductsList/></Link>
                <Link to={`/products/${5}`}><ProductsList/></Link>
                <Link to={`/products/${6}`}></Link> */}
            </div>
        </>
     );
}
 
export default Products;
