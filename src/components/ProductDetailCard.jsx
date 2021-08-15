import React, {useState, useEffect} from 'react';

import ItemCount from '../components/ItemCount';
// import CarouselProductCard from './CarouselProductCard';
import { useContext } from '../context/CartContext';
import { Link } from 'react-router-dom';




const ProductDetailCard = ({dataProduct}) => {
    
    //uso contexto
    const {productsAdd} = useContext();

    
    

    const [count, setCount] = useState(1)
    //estado para mantener oculto el boton "finalizar compra"
    const [hidden, setHidden] = useState(true)
    const [selectCount, setSelectCount] = useState(false)

    

    const onAdd = () => {
        setHidden(true)
        setSelectCount(true)
        // alert(`Se agregaron ${numero} items al carrito`)

        productsAdd({id : dataProduct.id, name: dataProduct.title, price: dataProduct.price, count, code: dataProduct.code, stock: dataProduct.stock })
    } 

    

    console.log(dataProduct.img)
    console.log('cantidad a agregar', count)
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
                            <h5 className="my-1">{dataProduct.title}</h5>
                            <p className="my-1">{dataProduct.description}</p>
                            <span className="my-1">Precio unitario: ${dataProduct.price} </span>
                            {
                            selectCount ? (<Link to="/cart"><div className="my-3"><button className="btn btn-outline-success mt-2" >Terminar mi compra</button></div></Link>) :
                            (<ItemCount  onAdd={onAdd} stock={dataProduct.stock} count={count} setCount={setCount}/>)
                            
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetailCard;