import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';
import RepairCard from '../components/RepairCard';

const Repair = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Réparation" image={require('../assets/img/icons/pneu (1).png')} alt="Icône de pneus" />
            <RepairCard link="/tire" title="pneu" />
            <RepairCard link="/maintenance" title="vidange & révision" />
            <RepairCard link="/mechanics" title="mécanique & entretien" />
            <Footer />
        </div>
    );
};

export default Repair;