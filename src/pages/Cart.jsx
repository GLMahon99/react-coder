import React from 'react';

import {useContext} from '../context/CartContext'

const Cart = () => {

    const {listCart} = useContext();
    
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
                        <button type="button" className="btn btn-primary p-1 mx-1" >+</button>
                            <span className="mx-2">{item.numero}</span>
                        <button type="button" className="btn btn-secondary p-1 mx-1" >-</button>
                        </td>
                        <td>${ item.price * item.numero}</td>
                        
                    </tr>
                    
                </tbody>
                
                
            </table>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        <button className="btn btn-danger">Borrar todo</button>
                    </th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total de compra: {}</th>
                    
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
