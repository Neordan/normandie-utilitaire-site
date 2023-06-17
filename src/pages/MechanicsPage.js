import React, { useState } from 'react';
import CheckboxInput from '../components/CheckboxInput';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';
import ModalRepair from '../components/ModalRepair';

const MechanicsPage = () => {
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

  const [showModal, setShowModal] = useState(false);
  const [selectedMechanicsOptions, setSelectedMechanicsOptions] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleInputChange = (id, checked) => {
    setFormState((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };

  const handleContinueClick = () => {
    const selectedOptions = Object.keys(formState).filter((key) => formState[key]);
    setSelectedMechanicsOptions(selectedOptions);
    setShowModal(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Gérer la soumission du formulaire ici (envoi de données, etc.)
  };

  const closeModal = () => {
    setShowModal(false);
  };


    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage
                title="Mécanique & entretien"
                image={require('../assets/img/icons/outils.png')}
                alt="Icône d'outils"
            />

{showModal && (
        <ModalRepair
          selectedOptions={selectedMechanicsOptions}
          toggleOption={() => setShowModal(!showModal)}
          closeModal={closeModal}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          appointmentDate={appointmentDate}
          setAppointmentDate={setAppointmentDate}
        />
      )}
      
            <form className="mechanics-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <CheckboxInput
                        id="freinage"
                        label="Freinage"
                        checked={formState.freinage}
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
                        checked={formState.batterie}
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
                        checked={formState.courroie}
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
                        checked={formState.echappement}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="moteur"
                        label="Motorisation"
                        alt="Photo d'un moteur"
                        checked={formState.moteur}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="eclairage"
                        label="Éclairage"
                        checked={formState.eclairage}
                        onChange={handleInputChange}
                    />
                    <CheckboxInput
                        id="carrosserie"
                        label="Carrosserie"
                        alt="Photo d'un homme s'occupant de la carroserie d'une voiture"
                        checked={formState.carrosserie}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="validate" onClick={handleContinueClick}>
                    Valider
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default MechanicsPage;

