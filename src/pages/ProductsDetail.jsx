import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../components/ProductDetailCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataBase from '../components/ProductsData';






const ProductsDetail = () => {
    const [dataProduct, setDataProduct] = useState([])
    const { productId } = useParams();

    useEffect(() => {
        
        new Promise ((resolve, reject) => {
            setTimeout(() => resolve( productId ? dataBase.filter((product) => product.id === productId) : dataBase), 1000 );
        }).then(
            (dataResolve) => {
                setDataProduct(dataResolve);
        })
    }, [])

    

    console.log(productId);



    return ( 
        <>
            <div className="container">
                <h1 style={{marginTop:"70px"}}>producto segun el id {productId}</h1>
                 <ProductDetailCard dataProduct={dataProduct}/>
            </div>
            
        </>
     );
}
 
export default ProductsDetail;