import React from 'react';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={()=>navigate("/home")} role='button'>Tienda de Ropa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="w-100 d-flex justify-content-center gap-3">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <div className="nav-link fs-5" onClick={()=>navigate("/ropa-hombre")} role='button'>
                                    Hombre
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className="nav-link fs-5" onClick={()=>navigate("/ropa-mujer")} role='button'>
                                    Mujer
                                </div>
                            </li>
                            <li className='nav-item'>
                                <div className="nav-link fs-5" onClick={()=>navigate("/ropa-deportivo")} role='button'>
                                    Deportivo
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ms-auto">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default NavBar;