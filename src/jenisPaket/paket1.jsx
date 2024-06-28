import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import L from "leaflet";
import coordinates from "../homepage/components/distance/dummyLocation";
import { getDistance } from "geolib"; // Import geolib for distance calculation
//import "../../../index.css";

const Paket1 = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    address: "",
    creditCard: "",
    paket: "Paket 1",
    harga: 750000,
  });
  const [customerLocation, setCustomerLocation] = useState(null);
  const [finalPrice, setFinalPrice] = useState(750000);
  const [distanceInKm, setDistanceInKm] = useState(0);

  const adminLocation = {
    lat: -6.579697874912893,
    lng: 106.82540895582257,
  };

  const setData = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLocationChange = (e) => {
    const selectedLocation = coordinates.find(
      (location) => location.name === e.target.value
    );
    if (selectedLocation) {
      setCustomerLocation({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      calculateDistance(adminLocation, selectedLocation);
    }
  };

  const calculateDistance = (adminLocation, customerLocation) => {
    const dist = getDistance(
      { latitude: adminLocation.lat, longitude: adminLocation.lng },
      { latitude: customerLocation.lat, longitude: customerLocation.lng }
    );
    const distanceInKm = (dist / 1000).toFixed(2); // Convert to KM and fix to 2 decimal places
    setDistanceInKm(distanceInKm);
    updatePrice(distanceInKm);
  };

  const updatePrice = (distance) => {
    const additionalCost = distance * 10000;
    setFinalPrice(750000 + additionalCost);
  };

  const addCustomerData = async (e) => {
    e.preventDefault();
    const { username, email, address, creditCard, paket } = inputValue;
    const harga = finalPrice;

    const res = await fetch("http://localhost:5000/api/customer/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        address,
        creditCard,
        paket,
        harga,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("error");
    } else {
      setInputValue({
        username: "",
        email: "",
        address: "",
        creditCard: "",
        paket: "Paket 1",
        harga: 750000,
      });
      setDistanceInKm(0);
      setFinalPrice(750000);
      setCustomerLocation(null);
      alert("Pesanan menunggu persetujuan");
    }
  };

//   const markerIcon = new L.Icon({
//     iconUrl: require("../../../assets/mapMark.png"),
//     iconSize: [35, 45],
//   });

  return (
    <div className="container">
      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h2>PAKET 1</h2>
        <h2>Rp 750.000</h2>
        <p className="lead"></p>
      </div>
      {/* container MAP */}
      <div className="row g-5">
        {/* <div className="col-md-5 col-lg-4 order-md-last">
          <div className="mapUI">
            <MapContainer center={adminLocation} zoom={10} style={{ height: "300px", width: "100%", position: "relative" }}>
              <TileLayer
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=DiWZoFVd2jptZKgNpVsL"
                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenstreetMap</a> contributors'
              />
              <Marker position={adminLocation} icon={markerIcon}>
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
                  <Polyline positions={[adminLocation, customerLocation]} color="blue" />
                </>
              )}
            </MapContainer>
          </div>
        </div> */}
        {/* container Form */}
        <div className="col-md-7 col-lg-5">
          <h4 className="mb-3">Ketentuan Paket</h4>
          <h5>- 1 Album 10 Halaman</h5>
          <h5>- Master Photo</h5>

          <form className="needs-validation" noValidate>
            <div className="row g-3">
              {/* Username */}
              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={inputValue.username}
                    onChange={setData}
                    placeholder="Username"
                    required
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={inputValue.email}
                  onChange={setData}
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              {/* Address */}
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={inputValue.address}
                  onChange={setData}
                  placeholder="Kota/Tempat"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              {/* Dropdown untuk memilih lokasi */}
              <div className="col-12">
                <label htmlFor="location" className="form-label">
                  Pilih Lokasi
                </label>
                <select className="form-control" id="location" onChange={handleLocationChange}>
                  <option value="">Pilih Lokasi</option>
                  {coordinates.map((location) => (
                    <option key={location.name} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Paket */}
              <div className="col-12">
                <label htmlFor="paket" className="form-label">
                  Paket
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="paket"
                  name="paket"
                  value={`${inputValue.paket} - ${distanceInKm} KM`}
                  readOnly
                />
              </div>
              {/* Harga */}
              <div className="col-12">
                <label htmlFor="harga" className="form-label">
                  Jumlah Harga
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="harga"
                  name="harga"
                  value={finalPrice}
                  readOnly
                />
              </div>
              {/* Credit Card */}

              <h4 className="col-md-6">Transfer Ke Sini : 123451234</h4>
              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">
                  Credit card number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cc-number"
                  name="creditCard"
                  value={inputValue.creditCard}
                  onChange={setData}
                  placeholder="0000000"
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <button
              onClick={addCustomerData}
              className="w-100 btn btn-primary btn-lg"
              type="submit"
            >
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paket1;
