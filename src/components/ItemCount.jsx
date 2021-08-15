import React from 'react';

// import { useContext } from '../context/Context';

let ItemCount = ({stock, onAdd ,count, setCount} ) =>{

    // const {productsAdd} = useContext();
    

    let addCount = () => {
        count < stock ? setCount(count + 1) : alert('La cantidad supera al stock disponible')
    }
    let outCount = () => {
        
        count > 0 ? setCount(count - 1) : alert('Las cantidades no pueden ser negativas')

    }

   

    return(
        <div  className="my-4">
            
            <button type="button" className="btn btn-primary mx-1"  onClick={addCount}>+</button>
            <span className="mx-1">{count}</span>
            <button type="button" className="btn btn-secondary mx-1" onClick={outCount}>-</button>
            <button type="button" className="btn btn-warning mx-3" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;