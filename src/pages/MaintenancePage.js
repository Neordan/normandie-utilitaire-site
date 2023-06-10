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
            <TitlePage title="vidange & révision" image={require('../assets/img/icons/goutte-de-liquide.png')} alt="Icône de goutte d'huile" />
            <form action="">
                <div>
                    <input type="checkbox" name="simple-maintenance" id="simple-maintenance" />
                    <label htmlFor="simple-maintenance">Vidange simple</label>
                    <button type="button" onClick={(e) => handleButtonClick(e, 'simple-maintenance')}>
                        {showDetails['simple-maintenance'] ? 'Masquer les informations' : '+ d\'informations'}
                    </button>
                    {showDetails['simple-maintenance'] && (
                        <div>
                            <p>{detailedInformation['simple-maintenance']}</p>
                        </div>
                    )}
                </div>

                <div>
                    <input type="checkbox" name="complete-maintenance" id="complete-maintenance" />
                    <label htmlFor="complete-maintenance">Vidange complète</label>
                    <button type="button" onClick={(e) => handleButtonClick(e, 'complete-maintenance')}>
                        {showDetails['complete-maintenance'] ? 'Masquer les informations' : '+ d\'informations'}
                    </button>
                    {showDetails['complete-maintenance'] && (
                        <div>
                            <p>{detailedInformation['complete-maintenance']}</p>
                        </div>
                    )}
                </div>

                <div>
                    <input type="checkbox" name="revision" id="revision" />
                    <label htmlFor="revision">Révision</label>
                    <button type="button" onClick={(e) => handleButtonClick(e, 'revision')}>
                        {showDetails['revision'] ? 'Masquer les informations' : '+ d\'informations'}
                    </button>
                    {showDetails['revision'] && (
                        <div>
                            <p>{detailedInformation['revision']}</p>
                        </div>
                    )}
                </div>

                <button className="validate">valider</button>
            </form>
            <Footer />
        </div>
    );
};

export default MaintenancePage;
