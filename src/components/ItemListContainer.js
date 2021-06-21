import React from 'react';
import ItemCount from './ItemCount';

const styleItem = {
    color: "black",
    fontFamily: "arial",
    fontSize: "15px",
}

function ItemListContainer(greting){
 return(
    <div className="">
        <h5 style={styleItem}>Titulo Producto</h5>
        <div>
            <img></img>
            <ul>
                <li style={styleItem}>description</li>
                <li style={styleItem}>description</li>
                <li style={styleItem}>description</li>
            </ul>
        </div>
        <ItemCount stock={3} initial={1}/>
    </div>
    )
}

export default ItemListContainer;