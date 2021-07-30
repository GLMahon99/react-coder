import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from '../context/Context'

const Cart = () => {

    const {list} = useContext();


    return ( <>
        <h1 style={{marginTop:"70px"}}>Carrito de compras</h1>
    {list.map((item) => (
        
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
                    <th scope="row">1</th>
                        <td>{item.titulo}</td>
                        <td>
                        <button type="button" className="btn btn-primary mx-1" >+</button>
                            {item.count}
                        <button type="button" className="btn btn-secondary mx-1" >-</button>
                        </td>
                        <td>${item.precio}</td>
                        
                    </tr>
                    
                </tbody>
                <tfooter>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfooter>
                
            </table>
            </div>
    
    )
    )
};
</>
     );
}
 
export default Cart;
