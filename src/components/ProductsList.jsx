import React from 'react';
import ProductItem from './ProductItem';
import {useContext} from '../context/Context';



const ProductsList = ({}) => {

    const { dataProducts } = useContext();
    return ( 
        <>
            <div>
                {dataProducts.map((item) => <ProductItem {...item}/> )}
            </div>   
            
        </>
     );
}
 
export default ProductsList;