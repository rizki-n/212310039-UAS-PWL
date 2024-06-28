import Homepage from "./homepage/homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headers from "./homepage/components/headers";
import Paket1 from "./jenisPaket/paket1";
import Paket2 from "./jenisPaket/paket2";
import Paket3 from "./jenisPaket/paket3";
import AdminPage from "./adminPage/adminPage";
//import './App.css';
import { useEffect } from "react";

function App() {
  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };
  // function success(pos) {
  //   var crd = pos.coords;
  //   console.log("Your current position is:");
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  //   console.log(`More or less ${crd.accuracy} meters.`);
  // }

  // function errors(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.permissions
  //       .query({ name: "geolocation" })
  //       .then(function (result) {
  //         console.log(result);
  //         if (result.state === "granted") {
  //           //If granted then you can directly call your function here
  //           navigator.geolocation.getCurrentPosition(success, errors, options);
  //         } else if (result.state === "prompt") {
  //           //If prompt then the user will be asked to give permission
  //           navigator.geolocation.getCurrentPosition(success, errors, options);
  //         } else if (result.state === "denied") {
  //           //If denied then you have to show instructions to enable location
  //         }
  //       });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }, []);


  return (
    <>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='paket1' element={<Paket1/>} />
          <Route path='paket2' element={<Paket2/>} />
          <Route path='paket3' element={<Paket3/>} />
          <Route path='admin' element={<AdminPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
