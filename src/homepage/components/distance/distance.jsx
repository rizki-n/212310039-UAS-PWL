import React from 'react';
import { useState } from 'react';

const Distance = () => {
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 1000,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={getUserLocation}>Get User Location</button>
      {userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Distance;
