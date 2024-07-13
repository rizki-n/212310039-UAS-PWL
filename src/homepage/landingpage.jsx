import React from "react";
import "../index.css";
import IMAGE from "../assets/camera.jpg";

const Landingpage = () => {
  return (
    <div className="container col-md-10 px-4 py-5 mb-5">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={IMAGE}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>

        <div className="col-lg-6">
          <h1 className="display-3  fw-bold text-body-emphasis lh-1 mb-3">
            Photography for Hire
          </h1>
          <p className="lead">
            Ready to capture your moments with us? Contact Ade Studio today to
            book your session or inquire about our services. We look forward to
            working with you and creating beautiful memories together
          </p>

          {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Lihat Paket
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Login
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
