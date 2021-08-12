import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList';

import dataBase from '../productsData';
import { useParams } from 'react-router-dom';

import { getFirestore } from '../firebase';


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
        <div className="my-5">
            <h1 style={{marginTop:"70px"}}>productos</h1>
            <div className=" container-fluid mx-2">
                <ProductsList dataProducts={dataProducts}/>
            </div>
        </div>
     );
    
}
 



        

    


    

 
export default Products;
