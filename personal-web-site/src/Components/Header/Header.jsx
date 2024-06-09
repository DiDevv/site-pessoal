import React from "react";
import "./Header.css"
import { Outlet, Link } from "react-router-dom";

function Header() {
    return(
        <header className="Header">
            <div className="Title">
                <h1>
                    <Link  to= "/" style={{ textDecoration: 'none' }}>
                    Diogo Dias
                    </Link></h1>
            </div>
            <div className="About-List">
                <ul className="List">
                    <li className="About">
                        <Link to ="/" style={{ textDecoration: 'none' }}>Sobre Mim</Link>
                    </li>
                    <li className="Projects">
                        <Link to = "/Projects" style={{ textDecoration: 'none' }}>Projetos</Link>
                    </li>
                    <li className="Articles">
                        <Link to = "/Articles" style={{ textDecoration: 'none' }}>Artigos</Link>
                    </li>
                    <li className="Tutorials">
                        <Link to= "/Tutorials" style={{ textDecoration: 'none' }}>Tutorials</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;