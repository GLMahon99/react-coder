import React from 'react';
import { Cart2 } from 'react-bootstrap-icons';
function CartWidget({cartCounter}){

    return(
        <>
            <Cart2 style={{color:'white', fontSize:"25px"}}>
                <span>{cartCounter}</span>
            </Cart2>
        </>
        
    )
    
}

export default CartWidget;