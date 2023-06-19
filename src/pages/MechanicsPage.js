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

  const [selectedMechanicsOptions, setSelectedMechanicsOptions] = useState({});
  const [mechanicsOptions, setMechanicsOptions] = useState([]);

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('selectedMechanicsOptions')) || {};
    setFormState(storedOptions);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMechanicsOptions', JSON.stringify(selectedMechanicsOptions));
  }, [selectedMechanicsOptions]);

  useEffect(() => {
    const mechanicsOptions = [];

    if (selectedMechanicsOptions['freinage']) {
      mechanicsOptions.push('Freinage');
    }

    // Ajoutez les autres options ici avec une structure similaire

    setMechanicsOptions(mechanicsOptions);
  }, [selectedMechanicsOptions]);


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

  const handleInputChange = (id, checked) => {
    setFormState((prevState) => ({
      ...prevState,
      [id]: checked
    }));
  };

  const handleContinueClick = () => {
    const selectedMechanicsOptions = Object.keys(formState).filter((key) => formState[key]);
    console.log('Selected mechanics options:', mechanicsOptions);
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(mechanicsOptions);

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
          selectedOptions={['mechanics']}
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
            alt="Photo d'un homme s'occupant de la carrosserie d'une voiture"
            checked={formState.carrosserie}
            onChange={handleInputChange}
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
