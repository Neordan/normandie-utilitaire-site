import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TruckPage = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="header-truck">
                <img src={require("../assets/img/camions/CAMION12.jpg")} alt="Photo de camion" />
                <p className="type">Utilitaire 12m³</p>
                <p className="model">Fiat Ducato</p>
            </div>
            <div className="info">
                <div className="essence">
                    <p>Diesel</p>
                </div>
                <div className="boite">
                    <p>Manuelle</p>
                </div>
                <div className="place">
                    <p>3 places</p>
                </div>
            </div>
            <div className="dimensions-group">
                <p className="dimension-title">Dimensions</p>
                <div className="dimensions">
                    <div className="longueur">
                        <p>Longueur : 4,07m</p>
                    </div>
                    <div className="largeur">
                        <p>Largeur : 1,87m</p>
                    </div>
                    <div className="hauteur">
                        <p>Hauteur : 1,90m</p>
                    </div>
                </div>
            </div>
            <div className="date-choice">
                <p>Choisissez vos dates</p>
                <form method="">
                    <div className="date">
                        <div className="date-debut">
                            <label htmlFor="start-date">Départ</label>
                            <input type="date" id="start-date" />
                        </div>
                        <div className="date-fin">
                            <label htmlFor="end-date">Arrivée</label>
                            <input type="date" id="end-date" />
                        </div>
                    </div>
                    <button className="continue">Continuer</button>
                </form>
            </div>
            <Footer />
        </div>

    );
};

export default TruckPage;