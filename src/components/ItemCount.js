import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

let ItemCount = ({stock, onAdd, initial} ) =>{

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