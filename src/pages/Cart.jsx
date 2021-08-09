import React from 'react';

import {useContext} from '../context/CartContext'

const Cart = () => {

    const {listCart, removeItemCart, clear, totalPrice, totalItems} = useContext();


    const countSum = (i) => {
        if (i.numero < i.stock) {
          i.numero++
        } else {
          alert('No hay stock disponible')
        }
      }
    
      const countRes = (i) => {
        if (i.numero >= 1) {
          i.numero --
        } else {
          let other = listCart.find(item => item.id === i.id);
          listCart.splice(listCart.indexOf(other), 1);
        }
      }



    
    
    if (listCart == 0){
        return(
            <h5 className="container py-5" style={{marginTop:"70px"}}>Carrito de compras vacío</h5>
        )
    }  else{

    return ( <>
        <h1 style={{marginTop:"70px"}}>Carrito de compras</h1>
    {listCart.map((item) => (
        
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>
                        <button type="button" className="btn btn-primary p-1 mx-1" onClick={() => countSum(item)} >+</button>
                            <span className="mx-2">{item.numero}</span>
                        <button type="button" className="btn btn-secondary p-1 mx-1" onClick={() => countRes(item)} >-</button>
                        </td>
                        <td>
                            <span>${ item.price * item.numero}</span> 
                            <button className="btn btn-danger p-1 ms-3" onClick={() => {removeItemCart(item.id)}}>x</button>
                        </td>
                        
                        
                    </tr>
                    
                </tbody>
                
                
            </table>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        <button className="btn btn-danger" onClick={clear} >Vaciar carrito</button>
                    </th>
                    <th scope="col">Cantidad: {totalItems}</th>
                        
                    <th scope="col">Total de compra: {totalPrice}</th>
                    
                    </tr>
                </thead>
            </table>
            </div>
    
     )
    )
}; 
</>
     );
    }
}
 
export default Cart;
