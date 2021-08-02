import React from 'react';
import ProductItem from './ProductItem';




const ProductsList = ({dataProducts}) => {

    
    return ( 
        <>
            <div className='row row-cols-3'>
                {dataProducts.map((item) => <ProductItem  {...item}/> )}
            </div>   
            
        </>
     );
}
 
export default ProductsList;