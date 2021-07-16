import React from 'react';
import ProductItem from './ProductItem';


const ProductsList = ({dataProducts}) => {
    return ( 
        <>
            {dataProducts.map((item) => <ProductItem {...item}/> )}
                
            
        </>
     );
}
 
export default ProductsList;