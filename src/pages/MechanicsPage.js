import React, { useState } from 'react';
import CheckboxInput from '../components/CheckboxInput';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const MechanicsPage = () => {
    const [formState, setFormState] = useState({
        brakes: false,
        battery: false,
        suspension: false,
        timingBelt: false,
        transmission: false,
        exhaust: false,
        engine: false,
        lighting: false,
        bodywork: false
    });

    const handleInputChange = (event) => {
        const { name, checked } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

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
                    className="freinage"
                    id="freinage"
                    label="Freinage"
                    checked={formState.brakes}
                    onChange={handleInputChange}
                />

                <CheckboxInput
                    id="batterie"
                    label="Batterie / Démarrage"
                    checked={formState.battery}
                    onChange={handleInputChange}
                />

                <CheckboxInput
                    id="suspension"
                    label="Direction / Suspension"
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
                    label="Transmission / Embrayage"
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
                <button className="validate">valider</button>
            
            </form>
            <Footer />
        </div>
    );
};

export default MechanicsPage;
