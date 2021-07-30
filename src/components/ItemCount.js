import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useContext } from '../context/Context';

let ItemCount = ({stock, onAdd ,initial} ) =>{

    // const {productsAdd} = useContext();
    let [count, setCount] = useState(initial)

    let addCount = () => {
        if(stock > 1 && count < stock){
            setCount(count ++)
        }
        else {
            alert("no hay mas stock disponible");
        }
    }
    let outCount = () => {
        
       count > 0 && setCount(count -1)
    }

    // let onAdd = () => {
    //     productsAdd({id: product.id, name: product.titulo, count})
    // };

    return(
        <div>
            <p>{count}</p>
            <button type="button" className="btn btn-primary mx-1"  onClick={addCount}>+</button>
            <button type="button" className="btn btn-secondary mx-1" onClick={outCount}>-</button>
            <button type="button" className="btn btn-warning mx-1"  onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;