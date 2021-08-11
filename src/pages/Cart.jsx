import React from 'react';
import CardCart from '../components/CardCart';

import {useContext} from '../context/CartContext'

const Cart = () => {

    const {listCart, clear, totalPriceCart, totalItems} = useContext();

    return(
        <div style={{marginTop:"5%"}}>
        <h2>Carrito de Compras</h2>
        {
            (listCart.length > 0) ? (
                
                    <div className="container" >
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                                
                                </tr>
                            </thead>
                            {listCart.map((item, i) => <CardCart key={i} dataCart={item} />)}
                            
                            
                        </table>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">
                                    <button className="btn btn-danger" onClick={clear} >Vaciar carrito</button>
                                </th>
                                <th scope="col">Cantidad: {totalItems()}</th>
                                    
                                <th scope="col">Total de compra: {totalPriceCart}</th>
                                
                                </tr>
                            </thead>
                        </table>
                    </div>
                
            ) : (
                <h5 className="container py-5" style={{marginTop:"70px"}}>Carrito de compras vacío</h5>
            )
        }
        </div>
    )

   
}
 
export default Cart;
