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

    
    // useEffect(()=>{
    //     //cuando entres a esta promise,dime que esta seteado en true
    //     setLoading(true)
    //     new Promise((resolve, reject)=>{
    //         setTimeout(() => resolve(
    //             categoryId ? dataBase.filter((product) => product.categoryId === categoryId) : dataBase )
    //             , 3000);
    //     }).then(
    //         (dataResolve) => {
    //         setDataProducts(dataResolve);
    //         //pero una vez que la resuelva setea como false
            
    //         setLoading(false);
    //     })
    // }, [categoryId])
    // console.log(dataProducts)
    // if(loading){
    //     return(
    //         <div className="position-absolute top-50 start-50 translate-middle" >
    //             <div className="spinner-border text-primary" role="status" style={{width: '5rem', height: '5rem'}}>
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     )
    // }


    useEffect(() => {
          
        if (categoryId) {
    
          let db = getFirestore();
          let itemCollection = db.collection("items").where("categoryId", "==", categoryId);
          itemCollection
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log('no result');
            } else {
              setDataProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) ))
            }
            
          })
    
        } else {
    
          let db = getFirestore();
          let itemCollection = db.collection("items");
          itemCollection
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              console.log('no result')
            } else {
              setDataProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
          }).catch(error => {
            console.log('error', error);
          })
    
        }
        
    
      }, [categoryId])
    
      console.log(dataProducts)
    return ( 
      
        
        <div className="my-5 container-fluid">
          <div className="d-flex justify-content-center">
            <h1 style={{marginTop:"70px", fontFamily:"arial", fontWeight:"bold", fontSize:"60px", color:"gray"}} >Productos</h1>
          </div>
            
            <div className=" container">
                <ProductsList dataProducts={dataProducts}/>
            </div>
        </div>
     );
    
}
 



        

    


    

 
export default Products;
