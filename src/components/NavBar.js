import React from 'react';
import CartWidget from './CartWidget'

const styleNavbar = {
    backgroundColor: "blue",
    color: "white"
}

function NavBar(){
    return(
            <div >
                <nav >
                    <div >
                        <a  href="#"><img ></img></a>
                        <a  href="#"><img ></img></a>
                        <button >
                            <span ></span>
                        </button>
                        <div >
                            <div >
                                <a  href="#section-inicio">Inicio</a>
                                <a  href="#section-nosotros">Nosotros</a>
                                <a  href="#section-productos">Productos</a>
                                <a  href="#section-encontranos">Encontranos en</a>
                                <a  href="#section-contacto">Contacto</a>
                                <CartWidget/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        
        
        
        
    )
}

export default NavBar;