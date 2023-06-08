import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <NavLink NavLink to="/" className={}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/reparation" className={}>
                    <li>Réparation</li>
                </NavLink>
                <NavLink to="/location" className={}>
                    <li>Location</li>
                </NavLink>
            </div>
        </div>
    );
};

export default Navigation;