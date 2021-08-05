import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../components/ProductDetailCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataBase from '../components/ProductsData';






const ProductsDetail = () => {
    const [dataProduct, setDataProduct] = useState([])
    const { productId } = useParams();
    //paso a numero el parametro
    const numberProduct = parseInt(productId);

    const filterData = dataBase.find((product) => product.id === numberProduct);

    useEffect(() => {
        
        new Promise ((resolve, reject) => {
            setTimeout(() => resolve(filterData), 1000 );
        }).then(
            (dataResolve) => {
                setDataProduct(dataResolve);
        })
    }, [numberProduct])

    

    



    return ( 
        <>
            <div className="container" style={{marginTop:'10%'}}>
                 <ProductDetailCard dataProduct={dataProduct}/>
            </div>
            
        </>
     );
}
 
export default ProductsDetail;