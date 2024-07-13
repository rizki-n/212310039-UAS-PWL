import React from "react";

const Footers = () => {
  return (
    <div className="footer mt-5" style={{ backgroundColor: "black" }}>
      <footer className="container py-5">
        <div className="row">
          <div className="ol-md-2 mb-3">
            <h5 className="text-white">About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-white">
                <p>
                  Welcome to Ade Studio, your premier destination for
                  professional photography and video editing services, located
                  at JL R. Khanafiah. At Ade Studio, we are passionate about
                  capturing your special moments and turning them into timeless
                  memories. Our team of experienced photographers and skilled
                  video editors is dedicated to providing top-notch services
                  that cater to your unique needs.
                </p>
              </li>
              {/* <li className="nav-item mb-2 text-white">Features</li>
              <li className="nav-item mb-2 text-white">Pricing</li>
              <li className="nav-item mb-2 text-white">FAQs</li>
              <li className="nav-item mb-2 text-white">About</li> */}
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3"></div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="text-white">
            &copy; 2024 Company, Inc. All rights reserved.
          </p>
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
