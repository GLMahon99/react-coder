import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

//agrupa cada uno de los items
function ItemList (){
  

    return(
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Item/>
      </div>
    )
}

export default ItemList;