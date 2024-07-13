import React from "react";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalPaket3 = ({
  show,
  handleClose,
  handleSubmit,
  inputValue,
  setData,
  handleLocationChange,
  coordinates,
  distanceInKm,
  finalPrice,
  addCustomerData,
  setTanggal
}) => {
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>PAKET 3</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
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

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email <span className="text-body-secondary"></span>
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

            <div className="col-12">
              <label htmlFor="location" className="form-label">
                Pilih Lokasi
              </label>
              <select
                className="form-control"
                id="location"
                onChange={handleLocationChange}
              >
                <option value="">Pilih Lokasi</option>
                {coordinates.map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="tanggal" className="form-label">
                Pilih Tanggal
              </label>
              <DatePicker
                selected={inputValue.tanggal}
                onChange={(date) => setTanggal(date)}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                placeholderText="Pilih Tanggal"
              />
            </div>

            <div className="col-12">
              <label htmlFor="paket" className="form-label">
                Paket
              </label>
              <input
                type="text"
                className="form-control"
                id="paket"
                name="paket"
                value={`${inputValue.paket} + ${distanceInKm} KM`}
                readOnly
              />
            </div>

            <div className="col-12">
              <label htmlFor="harga" className="form-label">
                Jumlah Harga (ongkir 10.000/KM)
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

          <Button
            onClick={addCustomerData}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
          >
            Continue to checkout
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPaket3;
