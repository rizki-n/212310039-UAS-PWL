import React from "react";
import { useNavigate } from "react-router-dom";

const Card3 = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="card" style={{ backgroundColor: "green" }}>
        <div className="card-footer text-white text-bold">Package 1</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Photography</li>
          <li className="list-group-item">
            <div className="d-flex flex-row">
              <p>Rp</p>
              <h1> 24.000</h1>
            </div>
            <a>
              <button
                type="button"
                className="btn btn-md text-white my-1"
                style={{ backgroundColor: "green" }}
                onClick={() => handleNavigation('/paket1')}
              >
                Pilih Paket
              </button>
            </a>
          </li>
          <li className="list-group-item">Ketentuan Paket</li>
          <li className="list-group-item">
            <p>+ Album</p>
            <p>+ File Master(Raw, Jpeg)</p>
            <p>+ 1 Hari</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card3;
