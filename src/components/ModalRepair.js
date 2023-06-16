import React, { useState } from 'react';

const ModalRepair = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="modal-repair">
            <h2>Confirmation</h2>
            <form onSubmit={handleFormSubmit}>
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
                <div className="info-appointment">

                </div>
                <div className="block">
                    <label htmlFor="appointmentDate">Date de rendez-vous:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </div>
                <button type="submit">Valider</button>
            </form>
        </div>
    );
};

export default ModalRepair;
