import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <NavLink NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/reparation" className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                    <li>Réparation</li>
                </NavLink>
                <NavLink to="/location" className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                    <li>Location</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;