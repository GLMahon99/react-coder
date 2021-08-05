import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../components/ItemCount';
// import CarouselProductCard from './CarouselProductCard';
import { useContext } from '../context/Context';




const ProductDetailCard = ({dataProduct}) => {
    

    console.log(dataProduct.img)
    return ( 
        <>
            <div className="mb-3">
                <div className="row row-col-2">
                    <div className="col d-flex justify-content-center">
                        
                            <img className="w-75" src={dataProduct.img} alt=""/>
                        
                        {/* <CarouselProductCard img={dataProduct.img} /> */}
                    </div>
                    <div className="col">
                        <div className="">
                            <h5 className="">{dataProduct.titulo}</h5>
                            <p className="">{dataProduct.descripcion}</p>
                            <ItemCount stock={3} initial={1}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetailCard;