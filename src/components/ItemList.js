import React from 'react';
import Item from './Item';

//agrupa cada uno de los items
function ItemList (){
    return(
      <div style={{border: '2px solid gray', borderRadius:'5px'}}>
          <Item/>
      </div>     
    )
}

export default ItemList;