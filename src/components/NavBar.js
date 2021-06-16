import React from 'react';
import CartWidget from './CartWdiget'

function NavBar(){
    return(
        <div className="header row shadow fixed-top">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="#"><img class="logo" src="./images/logo3.png" alt="logo-Earplugs"></img></a>
                        <a className="navbar-brand" href="#"><img class="logo-2" src="./images/favicon.ico" alt="logo-Earplugs-2"></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav pt-2">
                                <a className="nav-link active mx-3" href="#section-inicio">Inicio</a>
                                <a className="nav-link active mx-3" href="#section-nosotros">Nosotros</a>
                                <a className="nav-link active mx-3" href="#section-productos">Productos</a>
                                <a className="nav-link active mx-3" href="#section-encontranos">Encontranos en</a>
                                <a className="nav-link active mx-3" href="#section-contacto">Contacto</a>
                                <CartWidget>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        
    )
};

export default NavBar;