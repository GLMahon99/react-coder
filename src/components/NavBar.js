import React from 'react';
import CartWidget from './CartWidget'

const styleNavbar = {
    backgroundColor: "blue",
    width: "100%",
}
const styleItemNavbar = {
    color: "white",
    textDecoration: "none",
    marginLeft: "40px",
    marginRight: "40px"
}

function NavBar(){
    return(
            <div style={styleNavbar} >
                <nav >
                    <div >
                        <a  href="#"><img ></img></a>
                        <a  href="#"><img ></img></a>
                        <button >
                            <span ></span>
                        </button>
                        <div >
                            <div >
                                <a style={styleItemNavbar} href="#section-inicio">Inicio</a>
                                <a style={styleItemNavbar} href="#section-nosotros">Nosotros</a>
                                <a  style={styleItemNavbar} href="#section-productos">Productos</a>
                                <a  style={styleItemNavbar} href="#section-encontranos">Encontranos en</a>
                                <a  style={styleItemNavbar} href="#section-contacto">Contacto</a>
                                <CartWidget/>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        
        
        
        
    )
}

export default NavBar;