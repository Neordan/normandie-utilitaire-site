import React from 'react';

const Logo = () => {
    return (
        <a href="/" className="logo">
            <img src={require('../assets/img/logoversionmobile.png')} alt="Logo de Normandie Utilitaire" />
        </a>
    );
};

export default Logo;