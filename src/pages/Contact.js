import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TitlePage from '../components/TitlePage';
import ContactForm from '../components/FormContact';

const Contact = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="title-contact">
                <TitlePage title="contact" image={require('../assets/img/icons/e-mail.png')} alt="Icône d'un e-mail" />
            </div>
            <ContactForm />
            <div className="adress">
                <div className="info-adress">
                    <p>Normandie Utilitaire</p>
                    <p>31 rue Jacquard</p>
                    <p>76300 Sotteville-les-Rouen</p>
                    <a href={`tel:0465260690`}>Appeler</a>
                    <a href={`mailto:normandieutilitaire@mail.com`}>Envoyer un e-mail</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;