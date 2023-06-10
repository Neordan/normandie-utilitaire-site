import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    // État local pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    // Fonction appelée lorsqu'un champ du formulaire est modifié
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Fonction pour envoyer l'email
    const sendEmail = (e) => {
        e.preventDefault();

        // Utilisation de la référence du formulaire pour accéder aux valeurs des champs
        const form = e.target;

        // Envoie le formulaire via EmailJS en utilisant la référence du formulaire
        emailjs
            .sendForm('service_jiwg0tn', 'template_pqn415f', form, process.env.REACT_APP_ID)
            .then((result) => {
                // Réinitialisation du formulaire
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                });

                // Affichage du message de succès
                console.log('Message envoyé !');

                // Suppression du message de succès après un délai de 2,5 secondes
                setTimeout(() => {
                    console.log('');
                }, 2500);
            })
            .catch((error) => {
                // Affichage du message d'erreur
                console.log('Une erreur est survenue, veuillez réessayer !');
            });
    };

    return (
        <div>
            <p>
                Vous souhaitez nous contacter ?<br />
                Vous souhaitez nous faire part d'une demande de devis ?<br />
                Vous souhaitez nous faire part d'une demande de renseignements ?<br />
            </p>
            <form onSubmit={sendEmail}>
                <div className='first-container'>
                    <div>
                        <label htmlFor="firstName">Prénom:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Nom:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Numéro de téléphone:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Motif(s):</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;
