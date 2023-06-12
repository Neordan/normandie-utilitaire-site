import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const TirePage = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Pneumatiques" image={require('../assets/img/icons/pneu (1).png')} alt="Icône de pneus" />
            <form action="" method="post">
                <label htmlFor="width">Largeur</label>
                <select name="width" id=""></select>
                <label htmlFor="height">Hauteur</label>
                <select name="height" id=""></select>
                <label htmlFor="diameter">Diamètre</label>
                <select name="diameter" id=""></select>
                <label htmlFor="charge">Indice de charge</label>
                <select name="charge" id=""></select>
                <label htmlFor="speed">Indice de vitesse</label>
                <select name="speed" id=""></select>
                <button className="validate">valider</button>
            </form>
            <Footer />
        </div>
    );
};

export default TirePage;