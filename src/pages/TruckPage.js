import React from 'react';

const TruckPage = () => {
    return (
        <div>
            <div className="header-truck">
                <img src="" alt="" />
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
                <p>Dimensions</p>
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
                <form className="date">
                    <div className="date-debut">
                        <p>Date de début</p>
                        <input type="date" />
                    </div>
                    <div className="date-fin">
                        <p>Date de fin</p>
                        <input type="date" />
                    </div>
                    <button className="continue">Continuer</button>
                </form>
            </div>
        </div>

    );
};

export default TruckPage;