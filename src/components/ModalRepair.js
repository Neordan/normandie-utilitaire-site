import React, { useEffect } from 'react';

const ModalRepair = ({
  maintenanceOptions,
  selectedMechanicsOptions,
  setSelectedMaintenanceOptions,
  selectedTireOptions,
  closeModal,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  appointmentDate,
  setAppointmentDate
}) => {


  const maintenanceOptionsArray = Object.values(maintenanceOptions);

  useEffect(() => {
    const storedOptions = JSON.parse(localStorage.getItem('maintenanceOptions')) || [];
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici (envoi de données, etc.)
  };
  console.log(maintenanceOptions)
  console.log(typeof maintenanceOptions)
  return (
    <div className="modal-overlay">
      <div className="modal-repair">
        <h2>Confirmation</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Blocs spécifiques à la page maintenance */}
          {maintenanceOptionsArray.length > 0 && (
            <div className="maintenance">
              <h3>Prestations choisies :</h3>
              {maintenanceOptionsArray.map((option, index) => (
                <div key={option}>{option}</div>
              ))}
            </div>
          )}

          {/* Blocs spécifiques à la page mécanique */}
          {selectedMechanicsOptions && selectedMechanicsOptions.length > 0 && (
            <div className="mechanics">
              <h3>Options mécaniques :</h3>
              {selectedMechanicsOptions.map((option) => (
                <div key={option}>{option}</div>
              ))}
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
