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
                    id: 1,
                    codigo: "TPE01",
                    titulo: "Tapones para oídos silicona hipoalergénica moldeable 12 cajas (24 pares)",
                    precio: 1650,
                    color: "incoloro",
                    img: "images/inc.png",
                    descripcion: [
                        "Se adaptan cómodamente al oído.",
                        "Mejoran notablemente la calidad de horas de sueño, aislando los ruidos molestos.",
                        "Protegen del ingreso de agua al conducto auditivo.",
                        "Reducen 22 decibeles.",
                        "Incluye estuche para su almacenamiento."
                    ]

                }, 
                ]



const Products = () => {

const [dataProducts, setDataProducts] = useState(dataBase);
const [loading , setLoading] = useState(false);



useEffect(()=>{
    //cuando entres a esta promise,dime que esta seteado en true
    setLoading(true)
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve(dataBase), 3000);
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
