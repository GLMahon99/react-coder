import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
function CartWidget({cartCounter}){

    return(
        <div style={{color:"white", textDecoration:"none"}}>
            <Cart2 style={{ fontSize:"25px"}}/>
            <span >{cartCounter}</span>
        </div>
        
    )
    
}

export default CartWidget;