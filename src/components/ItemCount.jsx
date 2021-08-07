import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useContext } from '../context/Context';

let ItemCount = ({stock, onAdd ,initial, hideButton} ) =>{

    // const {productsAdd} = useContext();
    let [count, setCount] = useState(initial)

    let addCount = () => {
        count < stock ? setCount(count + 1) : alert('La cantidad supera al stock disponible')
    }
    let outCount = () => {
        
        count > 0 ? setCount(count - 1) : alert('Las cantidades no pueden ser negativas')

    }

    // let onAdd = () => {
    //     productsAdd({id: product.id, name: product.titulo, count})
    // };

    return(
        <div hidden={hideButton}>
            <p>{count}</p>
            <button type="button" className="btn btn-primary mx-1"  onClick={addCount}>+</button>
            <button type="button" className="btn btn-secondary mx-1" onClick={outCount}>-</button>
            <button type="button" className="btn btn-warning mx-1" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;