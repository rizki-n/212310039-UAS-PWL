import React from "react";

const Headers = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand navbar-dark" style={{ backgroundColor: "black" }}
        aria-label="Second navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  Location
                </a>
              </li>
            </ul>
            <ul>
              <li>
                login
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Headers;
