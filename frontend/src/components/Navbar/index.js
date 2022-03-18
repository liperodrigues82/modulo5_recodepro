import React from "react";

function Navbar() {

    return (
        <header className="p-3 bg-light text-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
                        <li><a href="/Destiny" className="nav-link px-2 text-dark">Destinos</a></li>
                        <li><a href="/Promo" className="nav-link px-2 text-dark">Promoções</a></li>
                        <li><a href="/Contact" className="nav-link px-2 text-dark">Contato</a></li>
                        <li><a href="/users" className="nav-link px-2 text-dark">Clientes</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Procurar..." aria-label="Search" />
                    </form>

                    <div class="text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;