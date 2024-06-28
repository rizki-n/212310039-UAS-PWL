import React, { Component } from "react";
import "../index.css";
import Landingpage from "./landingpage";
// import Paket from "./paket";
import Footers from "./components/footers";
import Card1 from "./components/card/card1";
import Card2 from "./components/card/card2";
import Card3 from "./components/card/card3";
import Distance from "./components/distance/distance";
//import Carousel from "./carousel";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div>
          <section>
            <Landingpage />
          </section>
        </div>

        <div className="container">

        
          <div className="py-5">
            {/* <Paket/> */}
            <div className="row d-flex justify-content-center">
              <h1 className="text-center">Choose your Package</h1>
              <p className="text-center pb-3">
                lorem ipsum dolor sit amet dolot sit amet dolor sit amet
              </p>
              <div className="col-md-3">
                <Card1 />
              </div>
              <div className="col-md-3 ">
                <Card2 />
              </div>
              <div className="col-md-3 ">
                <Card1 />
              </div>
            </div>
          </div>

          <div>
            <Distance />
          </div>
        </div>
        <Footers />
      </div>
    );
  }
}
