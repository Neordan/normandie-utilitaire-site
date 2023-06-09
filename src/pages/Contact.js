import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TitlePage from '../components/TitlePage';

const Contact = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <div className="title-contact">
                <TitlePage title="contact" image={require('../assets/img/icons/e-mail.png')} alt="Icône d'un e-mail" />
            </div>
            
            <Footer />
        </div>
    );
};

export default Contact;