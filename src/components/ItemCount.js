import React, {useState} from 'react';

let ItemCount = ({stock, onAdd, initial} ) =>{

    let [count, setCount] = useState(initial)

    let addCount = () => {
        if(stock > 1 && count <= stock){
            setCount(count ++)
        }
    }
    let outCount = () => {
        
        setCount(count -1)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={outCount}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;