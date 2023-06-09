import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';
import ModalRepair from '../components/ModalRepair';

const MaintenancePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState({
    'simple-maintenance': false,
    'complete-maintenance': false,
    revision: false,
  });
  const [selectedMaintenanceOptions, setSelectedMaintenanceOptions] = useState([]);
  const [maintenanceOptions, setMaintenanceOptions] = useState([]);

  useEffect(() => {
  const storedOptions = JSON.parse(localStorage.getItem('maintenanceOptions')) || {};
  setSelectedMaintenanceOptions(storedOptions);
}, []);

  useEffect(() => {
    localStorage.setItem('maintenanceOptions', JSON.stringify(maintenanceOptions));
  }, [maintenanceOptions]);

  useEffect(() => {
    const maintenanceOptions = [];

    if (selectedMaintenanceOptions['simple-maintenance']) {
      maintenanceOptions.push('Vidange simple');
    }
    if (selectedMaintenanceOptions['complete-maintenance']) {
      maintenanceOptions.push('Vidange complète');
    }
    if (selectedMaintenanceOptions['revision']) {
      maintenanceOptions.push('Révision');
    }

  }, [selectedMaintenanceOptions]);

  const toggleOption = (option) => {
    setSelectedMaintenanceOptions((prevOptions) => {
      const updatedOptions = {
        ...prevOptions,
        [option]: !prevOptions[option],
      };
      return updatedOptions;
    });
  
    setMaintenanceOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  
  const toggleDetails = (option) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(maintenanceOptions)

  return (
    <div>
      <Logo />
      <Navigation />
      <TitlePage
        title="Vidange & révision"
        image={require('../assets/img/icons/goutte-de-liquide.png')}
        alt="Icône de goutte d'huile"
      />

{showModal && (
  <ModalRepair
    selectedMaintenanceOptions={maintenanceOptions}
    selectedMechanicsOptions={mechanicsOptions}
    closeModal={closeModal}
  />
)}


      <form className="maintenance-form" onSubmit={handleFormSubmit}>
        <div className="inputs-group">
          <div className="input-top">
            <div className="block-label">
              <input
                type="checkbox"
                name="simple-maintenance"
                id="simple-maintenance"
                checked={selectedMaintenanceOptions['simple-maintenance']}
                onChange={() => toggleOption('Vidange simple')}
              />
              <div className="info-label">
                <label htmlFor="simple-maintenance">Vidange simple</label>
                <div className="info-btn">
                  <button type="button" onClick={() => toggleDetails('simple-maintenance')}>
                    {showDetails['simple-maintenance'] ? 'Masquer les informations' : "+ d'informations"}
                  </button>
                </div>
              </div>
            </div>
            {showDetails['simple-maintenance'] && (
              <div className="detail">
                <p>Informations détaillées sur la vidange simple</p>
              </div>
            )}
          </div>

          <div className="input-top">
            <div className="block-label">
              <input
                type="checkbox"
                name="complete-maintenance"
                id="complete-maintenance"
                checked={selectedMaintenanceOptions['complete-maintenance']}
                onChange={() => toggleOption('Vidange complète')}
              />
              <div className="info-label">
                <label htmlFor="complete-maintenance">Vidange complète</label>
                <div className="info-btn">
                  <button type="button" onClick={() => toggleDetails('complete-maintenance')}>
                    {showDetails['complete-maintenance'] ? 'Masquer les informations' : "+ d'informations"}
                  </button>
                </div>
              </div>
            </div>
            {showDetails['complete-maintenance'] && (
              <div className="detail">
                <p>Informations détaillées sur la vidange complète</p>
              </div>
            )}
          </div>

          <div className="input-top">
            <div className="block-label">
              <input
                type="checkbox"
                name="revision"
                id="revision"
                checked={selectedMaintenanceOptions['revision']}
                onChange={() => toggleOption('Révision')}
              />
              <div className="info-label">
                <label htmlFor="revision">Révision</label>
                <div className="info-btn">
                  <button type="button" onClick={() => toggleDetails('revision')}>
                    {showDetails['revision'] ? 'Masquer les informations' : "+ d'informations"}
                  </button>
                </div>
              </div>
            </div>
            {showDetails['revision'] && (
              <div className="detail">
                <p>Informations détaillées sur la révision</p>
              </div>
            )}
          </div>
        </div>
        <button className="validate" type="submit">
          Valider
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default MaintenancePage;
