import React, { useState, useEffect } from "react";
import axios from "axios";

const TableOrder = () => {
  const [customers, setCustomers] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState({});

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/customer/fetch-all"
    );
    setCustomers(response.data);
  };

  const handleAccept = (id) => {
    setAcceptedOrders((prevAcceptedOrders) => ({
      ...prevAcceptedOrders,
      [id]: true,
    }));
    getCustomers();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customer/delete/${id}`);
      setCustomers(customers.filter((customer) => customer._id !== id));
    } catch (error) {
      console.error("There was an error deleting the customer!", error);
    }
  };

  return (
    <div className="container">
      <h2>TABEL PESANAN</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Location</th>
            <th scope="col">Paket</th>
            <th scope="col">Harga</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id}>
              <td>{index + 1}</td>
              <td>{customer.username}</td>
              <td>{customer.email}</td>
              <td>{customer.location}</td>
              <td>{customer.paket}</td>
              <td>{customer.harga}</td>
              <td>
                {acceptedOrders[customer._id] ? (
                  <button className="btn btn-secondary" disabled>
                    Accepted
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAccept(customer._id)}
                  >
                    Accept
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(customer._id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrder;
