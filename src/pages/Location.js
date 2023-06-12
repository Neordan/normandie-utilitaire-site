import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import TitlePage from '../components/TitlePage';
import LocationCard from '../components/LocationCard';
import Footer from '../components/Footer';


const Location = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <TitlePage title="Location" image={require("../assets/img/icons/camion (1).png")} alt="Icône de camion" />
            <div className="location-cards">
                <LocationCard
                    link="/camion"
                    className="location-card-1"
                    truckType="Utilitaire 12m³"
                    imageUrl={require('../assets/img/camions/CAMION12.jpg')}
                />
                <LocationCard
                    link="/camion"
                    className="location-card-2"
                    truckType="Utilitaire 16m³"
                    imageUrl={require('../assets/img/camions/CAMION16.jpg')}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Location;