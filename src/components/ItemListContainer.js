import React from 'react';

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
        
    </div>
    )
}

export default ItemListContainer;