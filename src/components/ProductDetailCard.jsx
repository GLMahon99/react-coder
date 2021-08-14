import React, {useState, useEffect} from 'react';

import ItemCount from '../components/ItemCount';
// import CarouselProductCard from './CarouselProductCard';
import { useContext } from '../context/CartContext';
import { Link } from 'react-router-dom';




const ProductDetailCard = ({dataProduct}) => {
    
    //uso contexto
    const {productsAdd} = useContext();

    //estado de cantidad a agregar
    const [numberUnitsToAdd, setnumberUnitsToAdd] = useState(undefined)
    //estado para mantener oculto el boton "finalizar compra"
    const [Hidden, setHidden] = useState(true)

    const onAdd = (numberUnits) => {
        setnumberUnitsToAdd(numberUnits)
        // alert(`Se agregaron ${numero} items al carrito`)

        productsAdd({id : dataProduct.id, name: dataProduct.title, price: dataProduct.price, numberUnits })
    } 

    useEffect(()=>{
        numberUnitsToAdd ? setHidden(false) : setHidden(true)
    }, [numberUnitsToAdd])

    console.log(dataProduct.img)
    console.log('cantidad a agregar', numberUnitsToAdd)
    return ( 
        <>
            <div className="mb-3">
                <div className="row row-col-2">
                    <div className="col d-flex justify-content-center">
                        
                            <img className="w-75 " src={dataProduct.img} alt=""/>
                        
                        {/* <CarouselProductCard img={dataProduct.img} /> */}
                    </div>
                    <div className="col">
                        <div className="">
                            <h5 className="">{dataProduct.title}</h5>
                            <p className="">{dataProduct.description}</p>
                            <ItemCount hideButton={!Hidden} onAdd={onAdd} stock={dataProduct.stock} initial={1}/>
                            <Link to="/cart"><button className="btn btn-outline-success mt-2" hidden={Hidden}>Terminar mi compra</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetailCard;