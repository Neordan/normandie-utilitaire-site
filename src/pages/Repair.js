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
            <div className="repair-cards">
                <RepairCard link="/tire" title="Pneu" cardClass="card-1" />
                <RepairCard link="/maintenance" title="Vidange & révision" cardClass="card-2" />
                <RepairCard link="/mechanics" title="Mécanique & entretien" cardClass="card-3" />
            </div>
            <Footer />
        </div>
    );
};

export default Repair;