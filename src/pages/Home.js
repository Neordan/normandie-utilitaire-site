import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Description from '../components/Description';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="A propos de nous" />
            <Description />
            <Footer />
        </div>
    );
};

export default Home;