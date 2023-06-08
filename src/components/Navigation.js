import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <NavLink NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/reparation" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Réparation</li>
                </NavLink>
                <NavLink to="/location" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Location</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;