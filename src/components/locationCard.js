import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ truckType, imageUrl, link, className }) => {
    return (
        // <Link to={`/camion/${camionId}`}>
            <a href={link}className={className}>
                <div className="location-img">
                <img src={imageUrl} alt={truckType} />
                </div>
                <div className="location-under-card">
                    <p>{truckType}</p>
                    <p>Tarif à la journée / à la semaine</p>
                </div>
            </a>
        // </Link>
    );
};

export default LocationCard;