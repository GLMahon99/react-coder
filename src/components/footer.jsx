import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Instagram, Facebook, Twitter , Envelope} from 'react-bootstrap-icons';

const styleFooter = {
    backgroundColor: "#2e2b2b",
    width: "100%",
    color: 'white',
    

}
const styleIcons = {
    color: 'white',
    fontSize: '1.2rem',
}

const Footer = () => {
    return ( 
                <footer className="footer shadow p-3 position-relative bottom-0  container-fluid" style={styleFooter} >
                    <div className="container-fluid">
                        <div className="row row-cols-lg-3">
                            <div
                                className="col d-flex flex-column align-items-start justify-content-center justify-content-xl-start derechos">
                                <h6>EarplugsTJM © 2021 </h6>
                                <p>Todos los derechos reservados.</p>

                            </div>
                            <div className="col col-sm-7 d-flex align-items-center justify-content-center correo">
                                <a style={{color: 'white', textDecoration:'none'}} className="d-block" href="mailto: tjmearplugs@hotmail.com">
                                    <Envelope style={styleIcons}/> tjmearplugs@hotmail.com
                                </a>
                            </div>
                            <div className="col col-sm-1 d-flex flex-md-column flex-sm-column flex-lg-row align-items-lg-center align-items-md-end align-items-sm-end justify-content-center justify-content-xl-end iconos">
                                <a href="https://www.facebook.com/EarplugsTapones" target="_blank" rel="noopener noreferrer">
                                    <Facebook style={styleIcons} className='mx-3' />
                                </a>
                                <a href="https://www.instagram.com/earplugs_tjm/" target="_blank" rel="noopener noreferrer">
                                    <Instagram style={styleIcons} className='mx-3' />
                                </a>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <Twitter style={styleIcons} className='mx-3'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

            
     );
}
 
export default Footer;