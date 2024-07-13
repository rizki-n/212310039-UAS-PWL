import React, { useState } from "react";
import { Modal } from "bootstrap";
import ModalPaket2 from "../modal/modalPaket2";
import coordinates from "../distance/dummyLocation";
import { getDistance } from "geolib";

const Card2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    location: "",
    creditCard: "",
    paket: "Paket 2",
    harga: 1500000,
    tanggal: new Date()
  });
  
  const [customerLocation, setCustomerLocation] = useState(null);
  const [finalPrice, setFinalPrice] = useState(1500000);
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

  const setTanggal = (date) => {
    setInputValue((prevValue) => ({
      ...prevValue,
      tanggal: date,
    }));
  };

  const handleLocationChange = (e) => {
    const selectedLocation = coordinates.find(
      (location) => location.name === e.target.value
    );
    if (selectedLocation) {
      setCustomerLocation({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      setInputValue((prevValue) => ({
        ...prevValue,
        location: selectedLocation.name,
      }));
      calculateDistance(adminLocation, selectedLocation);
    }
  };

  const calculateDistance = (adminLocation, customerLocation) => {
    const dist = getDistance(
      { latitude: adminLocation.lat, longitude: adminLocation.lng },
      { latitude: customerLocation.lat, longitude: customerLocation.lng }
    );
    const distanceInKm = (dist / 1000).toFixed(2);
    setDistanceInKm(distanceInKm);
    updatePrice(distanceInKm);
  };

  const updatePrice = (distance) => {
    const additionalCost = distance * 10000;
    setFinalPrice(1500000 + additionalCost);
  };

  const addCustomerData = async (e) => {
    e.preventDefault();
    const { username, email, location, creditCard, paket, tanggal } = inputValue;
    const harga = finalPrice;

    const res = await fetch("http://localhost:5000/api/customer/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        location,
        creditCard,
        paket,
        harga,
        tanggal
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      alert("error");
    } else {
      setInputValue({
        username: "",
        email: "",
        location: "",
        creditCard: "",
        paket: "Paket 2",
        harga: 1500000,
        tanggal: new Date()
      });
      setDistanceInKm(0);
      setFinalPrice(1500000);
      setCustomerLocation(null);
      alert("Pesanan menunggu persetujuan");
      setShowModal(false);
    }
  };

  const handleNavigation = (path) => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className="card" style={{ backgroundColor: "black" }}>
        <div className="card-footer text-white text-bold">Package 2</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Photography + Videography</li>
          <li className="list-group-item">
            <div className="d-flex flex-row">
              <p>Rp</p>
              <h1> 1.500.000</h1>
            </div>
            <a>
              <button
                type="button"
                className="btn btn-md text-white my-1"
                style={{ backgroundColor: "black" }}
                onClick={() => handleNavigation('/paket2')}
              >
                Pilih Paket
              </button>
            </a>
          </li>
          <li className="list-group-item">Ketentuan Paket</li>
          <li className="list-group-item">
            <p>+ Album</p>
            <p>+ File Master(Raw, Jpeg, MOV)</p>
            <p>+ Video Edit MP4</p>
          </li>
        </ul>
      </div>
      <ModalPaket2
        show={showModal}
        handleClose={handleClose}
        handleSubmit={addCustomerData}
        inputValue={inputValue}
        setData={setData}
        handleLocationChange={handleLocationChange}
        coordinates={coordinates}
        distanceInKm={distanceInKm}
        finalPrice={finalPrice}
        addCustomerData={addCustomerData}
        setTanggal={setTanggal}
      />
    </div>
  );
};

export default Card2;
