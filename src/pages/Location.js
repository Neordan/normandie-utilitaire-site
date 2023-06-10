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
            <TitlePage title="location" image={require("../assets/img/icons/camion (1).png")} alt="Icône de camion" />
            <div className="container">
                <LocationCard
                    truckType="Utilitaire 12m³"
                    imageUrl="../assets/img/icons/camion (1).png"
                />
                <LocationCard
                    truckType="Utilitaire 16m³"
                    imageUrl="../assets/img/icons/camion (1).png"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Location;