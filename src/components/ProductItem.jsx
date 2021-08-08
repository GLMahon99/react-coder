import React from 'react';
import { Link } from 'react-router-dom';


const styleTitle = {
    color: "gray",
    fontSize: "14px",
    fontStyle: "lighter",
    

}

const ProductItem = ({titulo, img, id}) => {
    return ( 
        <>
            { !titulo && !img ? (
                <p>cargando productos</p>
            ) : (
            <Link style={{textDecoration: "none"}} to={`/products/${id}`}>
            <div className="col my-2">
                    <div className="card">
                        <img src={img} className="card-img-top container my-1" alt="..." style={{width:'60%'}}/>
                        <div className="card-body">
                            <h5 className="card-title" style={styleTitle}>{titulo}</h5>
                        </div>
                        
                    </div>
                </div>
            </Link>   
            )} 
        </>
     );
}
 
export default ProductItem;