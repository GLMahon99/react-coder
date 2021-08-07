import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../components/ItemCount';
// import CarouselProductCard from './CarouselProductCard';
import { useContext } from '../context/Context';
import { Link } from 'react-router-dom';




const ProductDetailCard = ({dataProduct}) => {
    
    // onAdd(quantityToAdd){
    //     //capturo los items enviados del item count
    // }
    //estado de cantidad a agregar
    const [quantityToAdd, setQuantityToAdd] = useState(undefined)
    //estado para mantener oculto el boton "finalizar compra"
    const [Hidden, setHidden] = useState(true)

    const onAdd = (numero) => {
        setQuantityToAdd(numero)
        alert(`Se agregaron ${numero} items al carrito`)
    } 

    useEffect(()=>{
        quantityToAdd ? setHidden(false) : setHidden(true)
    }, [quantityToAdd])

    console.log(dataProduct.img)
    console.log('cantidad a agregar', quantityToAdd)
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
                            <h5 className="">{dataProduct.titulo}</h5>
                            <p className="">{dataProduct.descripcion}</p>
                            <ItemCount hideButton={!Hidden} onAdd={onAdd} stock={3} initial={1}/>
                            <button className="btn btn-outline-success mt-2" hidden={Hidden} >Terminar mi compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetailCard;