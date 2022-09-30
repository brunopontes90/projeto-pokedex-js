import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <header className="container-fluid bg-white">
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to={'/'} className="navbar-brand">
                    <img src="#" alt="img" />
                    <h1 className="d-none">Just-T Store</h1>
                </Link>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarButton">
                    <i className="fas fa-bars fa-lg"></i>
                </button>
                <div id="navBarButton" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link text-muted font-weight-bold">Home</Link>
                        </li>
                        <li className="nav-item dropdown text-muted font-weight-bold">
                            <Link
                                to={'#'}
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-toggle="dropdown"
                                className="nav-link dropdown-toggle text-muted font-weight-bold"
                            >
                                Gerações
                            </Link>
                            <div class="dropdown-menu text-center">
                                <Link to={''} className="nav-link text-muted font-weight-bold">1º Geração</Link>
                                <Link to={''} className="nav-link text-muted font-weight-bold">2º Geração</Link>
                                <Link to={''} className="nav-link text-muted font-weight-bold">3º Geração</Link>
                                <Link to={''} className="nav-link text-muted font-weight-bold">4º Geração</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Menu;