import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const styleTitle = {
    color: "gray",
    fontSize: "14px",
    fontStyle: "lighter",
    

}

const ProductItem = ({titulo, img}) => {
    return ( 
        <>
            { !titulo && !img ? (
                <p>cargando productos</p>
            ) : (
            <Link style={{textDecoration: "none"}} to={`/products/${1}`}>
            <div className="col my-2">
                    <div className="card">
                        <img src={img} className="card-img-top" alt="..."/>
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