import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const MaintenancePage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDetails, setShowDetails] = useState({
    'simple-maintenance': false,
    'complete-maintenance': false,
    revision: false
  });

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) => prevOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const toggleDetails = (option) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  const detailedInformation = {
    'simple-maintenance': 'Informations détaillées sur la vidange simple',
    'complete-maintenance': 'Informations détaillées sur la vidange complète',
    revision: 'Informations détaillées sur la révision'
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOptions);
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <TitlePage
        title="Vidange & révision"
        image={require('../assets/img/icons/goutte-de-liquide.png')}
        alt="Icône de goutte d'huile"
      />
      <form className="maintenance-form" onSubmit={handleFormSubmit}>
        <div className="inputs-group">
          <div className="input-top">
            <div className="block-label">
              <input
                type="checkbox"
                name="simple-maintenance"
                id="simple-maintenance"
                checked={selectedOptions.includes('simple-maintenance')}
                onChange={() => toggleOption('simple-maintenance')}
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
                <p>{detailedInformation['simple-maintenance']}</p>
              </div>
            )}
          </div>

          <div>
            <input
              type="checkbox"
              name="complete-maintenance"
              id="complete-maintenance"
              checked={selectedOptions.includes('complete-maintenance')}
              onChange={() => toggleOption('complete-maintenance')}
            />
            <div className="info-label">
              <label htmlFor="complete-maintenance">Vidange complète</label>
              <div className="info-btn">
                <button type="button" onClick={() => toggleDetails('complete-maintenance')}>
                  {showDetails['complete-maintenance'] ? 'Masquer les informations' : "+ d'informations"}
                </button>
              </div>
            </div>
            {showDetails['complete-maintenance'] && (
              <div className="detail">
                <p>{detailedInformation['complete-maintenance']}</p>
              </div>
            )}
          </div>

          <div>
            <input
              type="checkbox"
              name="revision"
              id="revision"
              checked={selectedOptions.includes('revision')}
              onChange={() => toggleOption('revision')}
            />
            <div className="info-label">
              <label htmlFor="revision">Révision</label>
              <div className="info-btn">
                <button type="button" onClick={() => toggleDetails('revision')}>
                  {showDetails['revision'] ? 'Masquer les informations' : "+ d'informations"}
                </button>
              </div>
            </div>
            {showDetails['revision'] && (
              <div className="detail">
                <p>{detailedInformation['revision']}</p>
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
