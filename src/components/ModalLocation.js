import React, { useState } from 'react';

const ModalLocation = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="modal-location">
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
                <div className="location-appointment">
                        <div className="block">
                            <label htmlFor="start">Départ</label>
                            <input type="date" id="start" />
                        </div>
                        <div className="block">
                            <label htmlFor="end">Arrivée</label>
                            <input type="date" id="end" />
                        </div>

                </div>
                <div className="block price">
                    <h3>Prix total TTC</h3>
                    <span>X €</span>
                </div>
                <button type="submit">Valider</button>
            </form >
        </div >
    );
};

export default ModalLocation;