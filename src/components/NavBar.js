import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    return(
        
        <div className="header row shadow fixed-top">
            <div>
                <nav style={{backgroundColor:'#183dc2'}} className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid d-flex justify-content-around">
                        <Link  to="/"><img style={styleLogo} className="logo-2 my-1" src="images/favicon.ico"alt="logo-Earplugs-2"/></Link>
                        <div id="navbarNavAltMarkup">
                            <div className="navbar-nav pt-2">
                                <Link style={styleLink} to="/"><a className="nav-link active mx-3" >Inicio</a></Link>
                                <Link style={styleLink} to="/about"><a className="nav-link active mx-3" >Nosotros</a></Link>
                                <div className="nav-item dropdown">
                                    <a style={styleLink} className="nav-link active mx-3 dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Productos</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={styleDropdownMenu}>
                                    <Link style={styleItmeDropdown} to="/products"> <li li className="ms-3"><a >Todos los productos</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${1}`} ><li className="ms-3"><a>Inc</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${2}`} ><li className="ms-3"><a>Fluo</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${3}`} ><li className="ms-3"><a>Soft</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${4}`} ><li className="ms-3"><a>Vulcan</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${5}`} ><li className="ms-3"><a>Nude</a></li></Link>
                                        <hr/>
                                        <Link style={styleItmeDropdown} to={`/products/${6}`} ><li className="ms-3"><a>Splash</a></li></Link>

                                    </ul>
                                </div>
                                <Link style={styleLink}><a className="nav-link active mx-3 " >Contacto </a></Link>
                            </div>      
                        </div>
                        <Link to="/cart"><CartWidget/> </Link>
                    </div>
                </nav>
            </div>
        </div>
        
        
        
        
    )
}

export default NavBar;