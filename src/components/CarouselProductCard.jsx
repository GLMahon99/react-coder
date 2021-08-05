import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselProductCard = (props) => {
    return ( 
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade container-fluid" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props} className="d-block w-100 rounded-start" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props} className="d-block w-100 rounded-start" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props} className="d-block w-100 rounded-start" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </>
     );
}
 
export default CarouselProductCard;