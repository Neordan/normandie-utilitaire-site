import React, { useState, useEffect } from 'react';
import CheckboxInput from '../components/CheckboxInput';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';
import ModalRepair from '../components/ModalRepair';

const MechanicsPage = () => {
  const [showModal, setShowModal] = useState(false);
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

  const [selectedMechanicsOptions, setSelectedMechanicsOptions] = useState([]);
  const [mechanicsOptions, setMechanicsOptions] = useState([]);

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('mechanicsOptions')) || {};
    setFormState(storedOptions);
  }, []);

  useEffect(() => {
    localStorage.setItem('mechanicsOptions', JSON.stringify(mechanicsOptions));
  }, [mechanicsOptions]);

  const toggleOption = (option) => {
    setSelectedMechanicsOptions((prevOptions) => {
      const updatedOptions = {
        ...prevOptions,
        [option]: !prevOptions[option],
      };
      return updatedOptions;
    });

    setMechanicsOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
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
        selectedMaintenanceOptions={maintenanceOptions}
        selectedMechanicsOptions={mechanicsOptions}
          closeModal={closeModal}
        />
      )}

      <form className="mechanics-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <CheckboxInput
            id="freinage"
            label="Freinage"
            checked={formState.freinage}
            onChange={() => toggleOption('Freinage')}
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
            onChange={() => toggleOption('Batterie')}
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
            onChange={() => toggleOption('Suspension')}
          />
          <CheckboxInput
            id="courroie"
            label="Courroie de distribution"
            checked={formState.courroie}
            onChange={() => toggleOption('Courroie')}
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
            onChange={() => toggleOption('Transmission')}
          />
          <CheckboxInput
            id="echappement"
            label="Échappement"
            alt="Photo d'un échappement"
            checked={formState.echappement}
            onChange={() => toggleOption('Échappement')}
          />
          <CheckboxInput
            id="moteur"
            label="Motorisation"
            alt="Photo d'un moteur"
            checked={formState.moteur}
            onChange={() => toggleOption('Moteur')}
          />
          <CheckboxInput
            id="eclairage"
            label="Éclairage"
            checked={formState.eclairage}
            onChange={() => toggleOption('Éclairage')}
          />
          <CheckboxInput
            id="carrosserie"
            label="Carrosserie"
            alt="Photo d'un homme s'occupant de la carrosserie d'une voiture"
            checked={formState.carrosserie}
            onChange={() => toggleOption('Carrosserie')}
          />
        </div>
        <button className="validate">
          Valider
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default MechanicsPage;
