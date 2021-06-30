import React, {useState} from 'react';
import Button from '@material-ui/core/Button'

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
            <Button size="medium" variant="outlined" color="secondary" onClick={addCount}>+</Button>
            <Button size="medium" variant="outlined" color="primary" onClick={outCount}>-</Button>
            <Button size="medium" variant="outlined" onClick={onAdd}>Agregar al carrito</Button>
        </div>
    )

}

export default ItemCount;