import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-link">
                <NavLink NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active-footer" : "")}>
                    <li>Contactez-nous</li>
                </NavLink>
                <NavLink to="/mentions_legales" className={(nav) => (nav.isActive ? "nav-active-footer" : "")}>
                    <li>Mentions légales</li>
                </NavLink>
                <NavLink to="/politique_de_confidentialite" className={(nav) => (nav.isActive ? "nav-active-footer" : "")}>
                    <li>Politique de confidentialité</li>
                </NavLink>
            </div>
            <img src={require("../assets/img/logoversionmobile.png")} alt="Logo de Normandie Utilitaire" />
            <p>
                © 2023 Normandie Utilitaire. Tous droits réservés.
            </p>
        </div>
    );
};

export default Footer;