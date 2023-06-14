import React, { useState } from 'react';
import CheckboxInput from '../components/CheckboxInput';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const MechanicsPage = () => {
    // État initial pour les cases à cocher
    const [formState, setFormState] = useState({
        freinage: false,
        batterie: false,
        suspension: false,
        courroie: false,
        transmission: false,
        echappement: false,
        moteur: false,
        eclairage: false,
        carrosserie: false
    });

    // Gestionnaire de changement pour les cases à cocher
    const handleInputChange = (id, checked) => {
        setFormState(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };

    // Gestionnaire de clic sur le bouton "Continuer"
    const handleContinueClick = () => {
        console.log(formState);
    };

    // Gestionnaire de soumission du formulaire
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Mécanique & entretien" image={require('../assets/img/icons/outils.png')} alt="Icône d'outils" />

            <form className="mechanics-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <CheckboxInput
                        id="freinage"
                        label="Freinage"
                        checked={formState.brakes}
                        onChange={handleInputChange}
                    />

                    <CheckboxInput
                        id="batterie"
                        label={
                            <div className="label">
                                <span>Batterie</span>
                                <span className="separator" />
                                <span>Démarrage</span>
                            </div>
                        }
                        checked={formState.battery}
                        onChange={handleInputChange}
                    />


                    <CheckboxInput
                        id="suspension"
                        label={
                            <div className="label">
                                <span>Direction</span>
                                <span className="separator" />
                                <span>Suspension</span>
                            </div>
                        }
                        checked={formState.suspension}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="courroie"
                        label="Courroie de distribution"
                        checked={formState.timingBelt}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="transmission"
                        label={
                            <div className="label">
                                <span>Transmission</span>
                                <span className="separator" />
                                <span>Embrayage</span>
                            </div>
                        }
                        alt="Photo d'un levier de vitesse"
                        checked={formState.transmission}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="echappement"
                        label="Échappement"
                        alt="Photo d'un échappement"
                        checked={formState.exhaust}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="moteur"
                        label="Motorisation"
                        alt="Photo d'un moteur"
                        checked={formState.engine}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="eclairage"
                        label="Éclairage"
                        checked={formState.lighting}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="carrosserie"
                        label="Carrosserie"
                        alt="Photo d'un homme s'occupant de la carroserie d'une voiture"
                        checked={formState.bodywork}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="validate" onClick={handleContinueClick}>valider</button>

            </form>
            <Footer />
        </div>
    );
};

export default MechanicsPage;
