import React from 'react';

const LocationCard = ({ truckType, imageUrl, dailyRate, weeklyRate }) => {
  return (
    <a href="/location" className="location-card">
      <img src={imageUrl} alt={truckType} />
      <div className="location-under-card">
        <p>{truckType}</p>
        <p>Tarif à la journée / à la semaine</p>
      </div>
    </a>
  );
};

export default LocationCard;