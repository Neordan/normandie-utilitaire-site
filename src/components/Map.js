import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customMarkerIcon from '../assets/img/icons/marqueur.png';


const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Fonction pour initialiser la carte
    const initMap = () => {
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([49.411376953125, 1.0981552600860596], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(mapRef.current);

        L.marker([49.411376953125, 1.0981552600860596], { icon: L.icon({ iconUrl: customMarkerIcon }) }).addTo(mapRef.current);

      }
    };

    initMap();
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
