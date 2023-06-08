import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Description from '../components/Description';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Description />
            <Footer />
        </div>
    );
};

export default Home;