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

    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Mécanique & entretien" image={require('../assets/img/icons/outils.png')} alt="Icône d'outils" />
            
            <form>
                <div className="form-group">
                <CheckboxInput
                    idRelation="freinage"
                    id="freinage"
                    label="Freinage"
                    imageSrc={require('../assets/img/images-input/freinage.jpg')}
                    alt="Photo d'un frein"
                    checked={formState.brakes}
                    onChange={handleInputChange}
                />

                <CheckboxInput
                    idRelation="batterie"
                    id="batterie"
                    label="Batterie/Démarrage"
                    imageSrc={require('../assets/img/images-input/batterie.jpg')}
                    alt="Photo d'une batterie"
                    checked={formState.battery}
                    onChange={handleInputChange}
                />

                <CheckboxInput
                    idRelation="suspension"
                    id="suspension"
                    label="Direction/Suspension"
                    imageSrc={require('../assets/img/images-input/suspension.jpg')}
                    alt="Photo de suspension"
                    checked={formState.suspension}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="courroie"
                    id="courroie"
                    label="Courrie de distribution"
                    imageSrc={require('../assets/img/images-input/courroie.jpg')}
                    alt="Photo d'un engrenage"
                    checked={formState.timingBelt}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="transmission"
                    id="transmission"
                    label="Transmission/Embrayage"
                    imageSrc={require('../assets/img/images-input/transmission.jpg')}
                    alt="Photo d'un levier de vitesse"
                    checked={formState.transmission}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="echappement"
                    id="echappement"
                    label="Échappement"
                    imageSrc={require('../assets/img/images-input/echappement.jpg')}
                    alt="Photo d'un échappement"
                    checked={formState.exhaust}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="moteur"
                    id="moteur"
                    label="Motorisation"
                    imageSrc={require('../assets/img/images-input/motorisation.jpg')}
                    alt="Photo d'un moteur"
                    checked={formState.engine}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="eclairage"
                    id="eclairage"
                    label="Éclairage"
                    imageSrc={require('../assets/img/images-input/eclairage.jpg')}
                    alt="Photo d'un phare"
                    checked={formState.lighting}
                    onChange={handleInputChange}
                />
                <CheckboxInput
                    idRelation="carrosserie"
                    id="carrosserie"    
                    label="Carrosserie"
                    imageSrc={require('../assets/img/images-input/carrosserie.jpg')}
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
