import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from '../context/Context';


//PETICION API FUTURA
// const fetchDataProducts = async () => {
//     const data = await fetch("./src/api.json");
//     console.log(data)

// }


const Products = () => {

    const { dataProducts, setDataProducts } = useContext();
    const [loading , setLoading] = useState(false);

    useEffect(()=>{
        //cuando entres a esta promise,dime que esta seteado en true
        setLoading(true)
        new Promise((resolve, reject)=>{
            setTimeout(() => resolve(dataProducts), 3000);
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
                <div className="spinner-border text-primary" role="status" style={{width: '5rem', height: '5rem'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return ( 
        <>
            <h1 style={{marginTop:"70px"}}>productos</h1>
            <div className="row row-cols-3 container-fluid mx-2">
                <ProductsList/>
                
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
