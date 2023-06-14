import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const MaintenancePage = () => {
    // Utilisation du hook useState pour gérer l'état des détails affichés
    const [showDetails, setShowDetails] = useState({
        'simple-maintenance': false,
        'complete-maintenance': false,
        revision: false
    });

    // Fonction pour inverser l'état des détails lorsqu'un bouton est cliqué
    const toggleDetails = (option) => {
        setShowDetails((prevState) => ({
            ...prevState,
            [option]: !prevState[option]
        }));
    };

    // Informations détaillées pour chaque option
    const detailedInformation = {
        'simple-maintenance': 'Informations détaillées sur la vidange simple',
        'complete-maintenance': 'Informations détaillées sur la vidange complète',
        revision: 'Informations détaillées sur la révision'
    };

    // Gestionnaire de clic sur le bouton
    const handleButtonClick = (e, option) => {
        e.preventDefault(); // Empêche le rechargement de la page
        toggleDetails(option); // Inverse l'état des détails
    };

    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Vidange & révision" image={require('../assets/img/icons/goutte-de-liquide.png')} alt="Icône de goutte d'huile" />
            <form className="maintenance-form" action="">
                <div className="inputs-group">
                    <div>
                        <input type="checkbox" name="simple-maintenance" id="simple-maintenance" />
                        <div className="info-label">
                            <label htmlFor="simple-maintenance">Vidange simple</label>
                            <div className="info-btn">
                                <button type="button" onClick={(e) => handleButtonClick(e, 'simple-maintenance')}>
                                    {showDetails['simple-maintenance'] ? 'Masquer les informations' : '+ d\'informations'}
                                </button>
                                </div>
                                </div>
                                </div>
                                {showDetails['simple-maintenance'] && (
                                    <div className="detail">
                                        <p>{detailedInformation['simple-maintenance']}</p>
                                    </div>
                                )}

                    <div>
                        <input type="checkbox" name="complete-maintenance" id="complete-maintenance" />
                        <div className="info-label">

                            <label htmlFor="complete-maintenance">Vidange complète</label>
                            <div className="info-btn">
                                <button type="button" onClick={(e) => handleButtonClick(e, 'complete-maintenance')}>
                                    {showDetails['complete-maintenance'] ? 'Masquer les informations' : '+ d\'informations'}
                                </button>
                                </div>
                            </div>
                        </div>
                                {showDetails['complete-maintenance'] && (
                                    <div className="detail">
                                        <p>{detailedInformation['complete-maintenance']}</p>
                                    </div>
                                )}

                    <div>
                        <input type="checkbox" name="revision" id="revision" />
                        <div className="info-label">
                            <label htmlFor="revision">Révision</label>
                            <div className="info-btn">
                                <button type="button" onClick={(e) => handleButtonClick(e, 'revision')}>
                                    {showDetails['revision'] ? 'Masquer les informations' : '+ d\'informations'}
                                </button>
                                </div>
                            </div>
                        </div>
                                {showDetails['revision'] && (
                                    <div className="detail">
                                        <p>{detailedInformation['revision']}</p>
                                    </div>
                                )}

                </div>

                <button className="validate">valider</button>
            </form >
            <Footer />
        </div >
    );
};

export default MaintenancePage;
