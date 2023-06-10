import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import Footer from '../components/Footer';

const MaintenancePage = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="vidange & révision" image={require('../assets/img/icons/goutte-de-liquide.png')} alt="Icône de goutte d'huile" />
            <form action="">
                <input type="checkbox" name="simple-maintenance" id="" />
                <label htmlFor="simple-maintenance">Vidange simple</label>
                <input type="checkbox" name="complete-maintenance" id="" />
                <label htmlFor="complete-maintenance">Vidange complète</label>
                <input type="checkbox" name="revision" id="" />
                <label htmlFor="revision">Révision</label>
                <button className="validate">valider</button>
            </form>
            <Footer />
        </div>
    );
};

export default MaintenancePage;