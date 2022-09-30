import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <header className="container-fluid bg-white">
            <nav className="navbar navbar-expand-sm navbar-light p-0">
                <Link to={'/'} className="navbar-brand">
                    <img
                        className="img-logo"
                        src="data:image/png;base64,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"
                    />
                    <h1 className="d-none">Pokemon</h1>
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
                            <div className="dropdown-menu text-center">
                                <Link to={'#'} className="nav-link text-muted font-weight-bold">Todos os pokemon</Link>
                                <Link to={'#'} className="nav-link text-muted font-weight-bold">1º Geração</Link>
                                <Link to={'#'} className="nav-link text-muted font-weight-bold">2º Geração</Link>
                                <Link to={'#'} className="nav-link text-muted font-weight-bold">3º Geração</Link>
                                <Link to={'#'} className="nav-link text-muted font-weight-bold">4º Geração</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Menu;