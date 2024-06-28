import React from "react";

const Footers = () => {
  return (
    <div className="footer mt-5" style={{ backgroundColor: "black" }}>
      <footer className="container py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-white">Iki Photo</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-white">Home</li>
              <li className="nav-item mb-2 text-white">Features</li>
              <li className="nav-item mb-2 text-white">Pricing</li>
              <li className="nav-item mb-2 text-white">FAQs</li>
              <li className="nav-item mb-2 text-white">About</li>
            </ul>
          </div>
          
          <div className="col-md-5 offset-md-1 mb-3"></div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="text-white">&copy; 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use href="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
