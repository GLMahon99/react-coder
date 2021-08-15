import React from 'react';
import { Link } from 'react-router-dom';


const styleTitle = {
    color: "gray",
    fontSize: "14px",
    fontStyle: "lighter",
    

}

const ProductItem = ({title, img, id}) => {
    return ( 
        <>
            { !title && !img ? (
                <p>cargando productos</p>
            ) : (
            <Link style={{textDecoration: "none"}} to={`/products/${id}`}>
            <div className="col my-2">
                    <div className="card mx-2">
                        <img src={img} className="card-img-top container my-1" alt="..." style={{width:'100%'}}/>
                        <div className="card-body d-flex justify-content-center">
                            <h5 className="card-title" style={styleTitle}>{title}</h5>
                        </div>
                        
                    </div>
                </div>
            </Link>   
            )} 
        </>
     );
}
 
export default ProductItem;