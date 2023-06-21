import React, { useState, useEffect } from 'react';

const ModalRepair = ({
  selectedMechanicsOptions: initialMechanicsOptions,
  selectedMaintenanceOptions,
  selectedMechanicsOptions,
  selectedTireOptions,
  closeModal,
}) => {
  const [showAddMechanicsForm, setShowAddMechanicsForm] = useState(false);
  const [showAddMaintenanceForm, setShowAddMaintenanceForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');



  useEffect(() => {
    const storedMechanicsOptions = JSON.parse(localStorage.getItem('mechanicsOptions')) || [];
    setSelectedMechanicsOptions(storedMechanicsOptions);
  }, []);
  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('maintenanceOptions')) || [];
    setSelectedMaintenanceOptions(storedOptions);
  }, []);

  // useEffect(() => {
  //   setSelectedMechanicsOptions(initialMechanicsOptions);
  // }, [initialMechanicsOptions]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Ajouter la logique pour soumettre le formulaire
  };

  const handleAddMechanicClick = () => {
    setShowAddMechanicsForm(true);
  };
  const handleAddMaintenanceClick = () => {
    setShowAddMaintenanceForm(true);
  };

  const handleNewMaintenanceOptionChange = (e) => {
    setNewMaintenanceOption(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-repair">
        <h2>Confirmation</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Blocs spécifiques à la page maintenance */}
          {(!selectedMaintenanceOptions || selectedMaintenanceOptions.length === 0) && !showAddMaintenanceForm ? (
            <div className="maintenance">
              <button onClick={handleAddMaintenanceClick}>
                Ajouter une option vidange
              </button>
            </div>
          ) : (
            <div className="maintenance">
              {showAddMaintenanceForm ? (
                <div>
                  <h3>Ajouter une prestation mécanique :</h3>
                  
                  <input
                    id="simple-maintenance"
                    type="checkbox"
                    value="Vidange-simple"
                  />
                  <label htmlFor="simple-maintenance">Vidange simple</label>
                  
                  <input
                    id="complete-maintenance"
                    type="checkbox"
                    value="Vidange-complete"
                  />
                  <label htmlFor="complete-maintenance">Vidange complète</label>
                  
                  <input
                    id="revision"
                    type="checkbox"
                    value="Revision"
                  />
                  <label htmlFor="revision">Revision</label>
                  
                  <button type="button" onClick={handleAddMaintenanceOption}>
                    valider
                  </button>
                </div>
              ) : (
                <>
                  <h3>Options vidanges :</h3>
                  {Array.isArray(selectedMaintenanceOptions) && selectedMaintenanceOptions.map((option) => (
                    <div key={option}>{option}</div>
                  ))}
                </>
              )}
            </div>
          )}
          {/* Blocs spécifiques à la page mécanique */}
          {(!selectedMechanicsOptions || selectedMechanicsOptions.length === 0) && !showAddMechanicsForm ? (
            <div className="mechanics">
              <button onClick={handleAddMechanicClick}>
                Ajouter une prestation mécanique
              </button>
            </div>
          ) : (
            <div className="mechanics">
              {showAddMechanicsForm ? (
                <div>
                  <h3>Ajouter une prestation mécanique :</h3>
                  
                  <input
                    id="freinage"
                    type="checkbox"
                    value="Freinage"
                  />
                  <label htmlFor="freinage">Freinage</label>
                  
                  <input
                    id="batterie"
                    type="checkbox"
                    value="Batterie"
                  />
                  <label htmlFor="batterie">Batterie</label>
                  
                  <input
                    id="suspension"
                    type="checkbox"
                    value="Suspension"
                  />
                  <label htmlFor="suspension">Suspension</label>
                  
                  <input
                    id="courroie"
                    type="checkbox"
                    value="Courroie"
                  />
                  <label htmlFor="courroie">Courroie</label>
                  
                  <input
                    id="transmission"
                    type="checkbox"
                    value="Transmission"
                  />
                  <label htmlFor="transmission">Transmission</label>
                  
                  <input
                    id="echappement"
                    type="checkbox"
                    value="Echappement"
                  />
                  <label htmlFor="echappement">Échappement</label>
                  
                  <input
                    id="moteur"
                    type="checkbox"
                    value="Moteur"
                  />
                  <label htmlFor="moteur">Moteur</label>
                  
                  <input
                    id="eclairage"
                    type="checkbox"
                    value="Eclairage"
                  />
                  <label htmlFor="eclairage">Éclairage</label>
                  
                  <input
                    id="carrosserie"
                    type="checkbox"
                    value="Carrosserie"
                  />
                  <label htmlFor="carrosserie">Carrosserie</label>
                  
                  <button type="button" onClick={handleAddMechanicOption}>
                    valider
                  </button>
                </div>
              ) : (
                <>
                  <h3>Options mécaniques :</h3>
                  {Array.isArray(selectedMechanicsOptions) && selectedMechanicsOptions.map((option) => (
                    <div key={option}>{option}</div>
                  ))}
                </>
              )}
            </div>
          )}

          {/* Blocs spécifiques à la page pneu */}
          {selectedTireOptions && selectedTireOptions.length > 0 && (
            <div className="tire">
              <h3>Options pneu :</h3>
              {selectedTireOptions.map((option) => (
                <div key={option}>{option}</div>
              ))}
            </div>
          )}

          {/* Reste du formulaire */}
          <div className="personal">
            <div className="block">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="block">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="block">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="block">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="block">
            <label htmlFor="appointmentDate">Date de rendez-vous :</label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <button type="submit">Valider</button>
        </form>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default ModalRepair;
