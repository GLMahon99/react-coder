import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useContext} from '../context/CartContext'


import { Link} from "react-router-dom";



const styleLogo = {
    width: "20%",
    height: "40%",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
}

const styleLink = {
    color: "white",
    fontSize: "1.1rem",
    textDecoration: "none"
}

const styleDropdownMenu = {
    backgroundColor:"#183dc2",   
}

const styleItmeDropdown = {
    fontSize:"13px",
    color: "white",
    textDecoration: "none",
}




function NavBar(){

    const { totalItems, listCart } = useContext();

    return(
        
        <div className="header row shadow fixed-top">
            <div>
                <nav style={{backgroundColor:'#183dc2'}} className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid d-flex justify-content-around">
                        <Link  to="/"><img style={styleLogo} className="logo-2 my-1" src="images/favicon.ico"alt="logo-Earplugs-2"/></Link>
                        <div id="navbarNavAltMarkup">
                            <div className="navbar-nav pt-2">
                                <Link style={styleLink} to="/" className="nav-link active mx-3" >Inicio</Link>
                                <Link style={styleLink} to="/about" className="nav-link active mx-3" >Nosotros</Link>
                                <div className="nav-item dropdown">
                                    <a style={styleLink} className="nav-link active mx-3 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Productos</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={styleDropdownMenu}>
                                    <Link style={styleItmeDropdown} to="/"> <li li className="ms-3"><a >Todos los productos</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to="/categories/waterproof" ><li className="ms-3">Waterproof</li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to="/categories/watersports" ><li className="ms-3">Watersports</li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to="/categories/soundreducers" ><li className="ms-3">Sound Reducers</li></Link>
                                        <hr/>
                                        {/* <Link style={styleItmeDropdown} to={`/products/${4}`} ><li className="ms-3">Vulcan</li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${5}`} ><li className="ms-3">Nude</li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${6}`} ><li className="ms-3">Splash</li></Link> */}

                                    </ul>
                                </div>
                                <Link style={styleLink} className="nav-link active mx-3 " >Contacto </Link>
                            </div>      
                        </div>
                        {
                            (listCart.length > 0) &&(
                                <Link  to="/cart"><CartWidget cartCounter={totalItems()} /> </Link>
                            )
                        }
                        
                    </div>
                </nav>
            </div>
        </div>
        
        
        
        
    )
}

export default NavBar;