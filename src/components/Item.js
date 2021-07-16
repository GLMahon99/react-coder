import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  
  export default function Item(id,title,description,price,pictureUrl) {
    
  
    return (
      
        <div className="col">
          <div className="row row-cols-2">
            <div className="col">
              {price}
            </div>
            <div className="col">
              {id}
            </div>
          </div>
          <div className="card h-100">
            <img src={pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      
    );
  }






