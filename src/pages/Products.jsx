import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataBase from '../components/ProductsData';
import { useParams } from 'react-router-dom';



//PETICION API FUTURA
// const fetchDataProducts = async () => {
//     const data = await fetch("./src/api.json");
//     console.log(data)

// }


const Products = () => {

    const [ dataProducts, setDataProducts ] = useState([]);
    const [loading , setLoading] = useState(false);
    const {categoryId} = useParams();

    
    useEffect(()=>{
        //cuando entres a esta promise,dime que esta seteado en true
        setLoading(true)
        new Promise((resolve, reject)=>{
            setTimeout(() => resolve(
                categoryId ? dataBase.filter((product) => product.categoryId === categoryId) : dataBase )
                , 3000);
        }).then(
            (dataResolve) => {
            setDataProducts(dataResolve);
            //pero una vez que la resuelva setea como false
            
            setLoading(false);
        })
    }, [categoryId])
    console.log(dataProducts)
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
            <div className=" container-fluid mx-2">
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
