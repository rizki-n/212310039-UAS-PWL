import React, { useRef, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "../../../index.css";
import { getDistance } from "geolib";

const MapUI = ({ customerLocation, updatePrice }) => {
  const [center, setCenter] = useState({
    lat: -6.579697874912893,
    lng: 106.82540895582257,
  });
  //const ZOOM_LVL = 9;
  const mapRef = useRef();

  const markerIcon = new L.Icon({
    iconUrl: require("../../../assets/mapMark.png"),
    iconSize: [35, 45],
  });

  const adminLocation = center;

  //hitung Distance
  useEffect(() => {
    if (customerLocation) {
      const dist = getDistance(
        { latitude: adminLocation.lat, longitude: adminLocation.lng },
        { latitude: customerLocation.lat, longitude: customerLocation.lng }
      );
      const distanceInKm = (dist / 1000).toFixed(2); // Convert to KM and fix to 2 decimal places
      updatePrice(distanceInKm);
    }
  }, [customerLocation, adminLocation, updatePrice]);

  return (
    <div className="mapUI">
      <MapContainer
        center={center}
        //zoom={ZOOM_LVL}
        style={{ height: "300px", width: "100%", position: "relative" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=DiWZoFVd2jptZKgNpVsL"
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenstreetMap</a> contributors'
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            <b>Admin Location</b>
          </Popup>
        </Marker>
        {customerLocation && (
          <>
            <Marker position={customerLocation} icon={markerIcon}>
              <Popup>
                <b>Customer Location</b>
              </Popup>
            </Marker>
            <Polyline
              positions={[adminLocation, customerLocation]}
              color="blue"
            />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapUI;
