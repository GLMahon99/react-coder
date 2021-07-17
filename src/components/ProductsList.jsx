import React from 'react';
import ProductItem from './ProductItem';


const ProductsList = ({dataProducts}) => {
    return ( 
        <>
            <div>
            {dataProducts.map((item) => <ProductItem {...item}/> )}
            </div>   
            
        </>
     );
}
 
export default ProductsList;