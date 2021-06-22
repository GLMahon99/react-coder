import React from 'react';

const styleItem = {
    color: "black",
    fontFamily: "arial",
    fontSize: "15px",
}


function Item (id,title,description,price,pictureUrl){
    return(
        <div>
        <img src={pictureUrl}></img>
            <ul>
                <li style={styleItem}>{id}</li>
                <li style={styleItem}>{title}</li>
                <li style={styleItem}>{price}</li>
                <li style={styleItem}>{description}</li>
            </ul>
        </div> 
    )
}

export default Item;