import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ truckType, imageUrl, dailyRate, weeklyRate }) => {
    return (
        // <Link to={`/camion/${camionId}`}>
            <div className="location-card">
                <img src={imageUrl} alt={truckType} />
                <div className="location-under-card">
                    <p>{truckType}</p>
                    <p>Tarif à la journée / à la semaine</p>
                </div>
            </div>
        // </Link>
    );
};

export default LocationCard;