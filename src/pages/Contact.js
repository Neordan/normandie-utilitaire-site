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
                <TitlePage title="contact" />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;