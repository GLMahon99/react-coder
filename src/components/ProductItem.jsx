import React from 'react';
import { Link } from 'react-router-dom';
const ProductItem = (titulo, img) => {
    return ( 
        <>
            <Link to={`/products/${1}`}>
            <div className="col my-2">
                    <div className="card">
                        <img src="img" class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                        </div>
                        
                    </div>
                </div>
            </Link>    
        </>
     );
}
 
export default ProductItem;