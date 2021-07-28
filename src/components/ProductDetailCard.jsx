import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../components/ItemCount';
import CarouselProductCard from './CarouselProductCard';
import { useContext } from '../context/Context';



const ProductDetailCard = ({dataProduct}) => {

    const {productsAdd} = useContext();

    
    return ( 
        <>
            <div className="mb-3">
                <div className="row row-col-2">
                    <div className="col">
                        <CarouselProductCard />
                    </div>
                    <div className="col">
                        <div className="">
                            <h5 className="">{dataProduct.titulo}</h5>
                            <p className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <ItemCount stock={3} initial={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetailCard;