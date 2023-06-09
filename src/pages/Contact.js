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
            


                        Vous pouvez nous contacter par téléphone au 02 32 12 12 12 ou par e-mail à l'adresse suivante :
                   
               
            <Footer />
        </div>
    );
};

export default Contact;