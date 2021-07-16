import React from 'react';

const ProductsList = (titulo,) => {
    return ( 
        <>
            
                <div className="col my-2">
                    <div className="card">
                        <img src="https://via.placeholder.com/200" class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                        </div>
                        
                    </div>
                </div>
            
        </>
     );
}
 
export default ProductsList;