import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
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
    );
};

export default Footer;