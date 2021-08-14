import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../components/ProductDetailCard';

import dataBase from '../productsData';

import { getFirestore } from '../firebase';




const ProductsDetail = () => {
    const [dataProduct, setDataProduct] = useState([])
    
    const { productId } = useParams();
    //paso a numero el parametro
    const numberProduct = parseInt(productId);

    const [loading, setLoading] = useState(false)

    // const filterData = dataBase.find((product) => product.id === numberProduct);
    
    

    // useEffect(() => {
        
    //     new Promise ((resolve, reject) => {
    //         setTimeout(() => resolve(filterData), 1000 );
    //     }).then(
    //         (dataResolve) => {
    //             setDataProduct(dataResolve);
    //     })
    // }, [numberProduct])

    // useEffect(() => {
    //     setLoading(true)
    //     const db = getFirestore();
    //     const itemCollection = db.itemCollection("items");
    //     itemCollection.get().then((querySnapshot) => {
    //         if(querySnapshot.size === 0){
    //             console.log('no results');
    //         }
    //         setDataProduct(querySnapshot.docs.map(doc => doc.data()));
    //     }).catch((error) => {
    //         console.log('error al cargar items', error);
    //     }).finally(() => {
    //         setLoading(false)
    //     })
        
    
    //   }, [numberProduct])

    useEffect(() => {
    
        let db = getFirestore();
        let itemCollection = db.collection("items");
    
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.exists) {
              setDataProduct({ id: querySnapshot.id, ...querySnapshot.data() })
            } else {
              console.log('Entro false');
            }
        })
        .catch(error => console.log('error', error))
    
        
      }, [productId])
    

    
    return ( 
        <>
            <div className="container" style={{marginTop:'10%'}}>
                 <ProductDetailCard dataProduct={dataProduct}/>
            </div>
            
        </>
     );
}
 
export default ProductsDetail;