import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../components/ProductDetailCard';

import { getFirestore } from '../firebase';

const ProductsDetail = () => {
    const [dataProduct, setDataProduct] = useState([])
    
    const { productId } = useParams();    


    useEffect(() => {
    
        let db = getFirestore();
        let itemCollection = db.collection("items").doc(productId);
    
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.exists) {
              setDataProduct({ id: querySnapshot.id, ...querySnapshot.data() })
            } else {
              console.log('Entro false');
            }
        })
        .catch(error => console.log('error', error))
    
        
      }, [productId])
    
      console.log('este es mi id', productId);
    
    return ( 
        <>
            <div className="container" style={{marginTop:'10%'}}>
                 <ProductDetailCard dataProduct={dataProduct}/>
            </div>
            
        </>
     );
}
 
export default ProductsDetail;