import React, {useState} from 'react';

import { useContext } from '../context/CartContext';

const CardCart = ({dataCart}) => {

    const { removeItemCart } = useContext()
    // const [ count, setCount ] = useState(dataCart.numberUnits);

    // const countSum = () => {
        
    //     if (count < dataCart.stock) {
    //       let newnumberUnits = dataCart.numberUnits += 1;
    //       setCount(newnumberUnits);
    //     } else {
    //       alert('No hay mas stock disponible.')
    //     }
    //   }
    
      
    //   const countRes = () => {
    //     if (count > 1) {
    //       let newNumberUnits = dataCart.numberUnits -= 1;
    //       setCount(newNumberUnits);
    //     } else {
    //       removeItemCart(dataCart.id);
    //     }
    //   }

    return ( 
        <>
            <tbody>
                    <tr>
                    <th scope="row">{dataCart.id}</th>
                        <td>{dataCart.name}</td>
                        <td>
                        {/* <button type="button" className="btn btn-primary p-1 mx-1" onClick={() => countSum(dataCart)} >+</button> */}
                            <span className="mx-2">{dataCart.numberUnits}</span>
                        {/* <button type="button" className="btn btn-secondary p-1 mx-1" onClick={() => countRes(dataCart)} >-</button> */}
                        </td>
                        <td>
                            <span>${ dataCart.price * dataCart.numberUnits}</span> 
                            <button className="btn btn-danger p-1 ms-3" onClick={() => {removeItemCart(dataCart)}}>x</button>
                        </td>
                        
                        
                    </tr>
                    
                </tbody>
        </>
     );
}
 
export default CardCart;