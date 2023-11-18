import React  from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    return <nav className="navbar">
                <div className="navbar-logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="link">
                <Link to="/">Accueil</Link>
                <Link to="/Apropos">A Propos</Link>
                </div>
                
         </nav>;

}

export default Navbar;