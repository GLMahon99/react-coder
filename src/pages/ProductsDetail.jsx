import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../components/ProductDetailCard';
import 'bootstrap/dist/css/bootstrap.min.css';



const ProductsDetail = () => {

    const { productId } = useParams();
    return ( 
        <>
            <div className="container">
                <h1 style={{marginTop:"70px"}}>producto segun el id {productId}</h1>
                <ProductDetailCard/>
            </div>
            
        </>
     );
}
 
export default ProductsDetail;