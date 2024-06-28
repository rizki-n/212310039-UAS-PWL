import React from "react";
import "../index.css";
import Paket1 from "../assets/paket1.png";
import Paket2 from "../assets/paket2.png";
import Paket3 from "../assets/paket3.png";
import { useNavigate } from "react-router-dom";

const Paket = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="paketPage">
      <h2>PILIH JENIS PAKET</h2> <br/>
      <div className="jenisPaket">
        <img 
        src={Paket1} 
        alt="paket1"
        onClick={() => handleNavigation('/paket1')}
        width="200" 
        height="120" 
        style={jarak}  
        />
        <img 
        src={Paket2}
        alt="paket2"
        onClick={() => handleNavigation('/paket2')} 
        width="300" 
        height="120"
        style={jarak}
        />
      </div>
      
      <div className="jenisPaket">
        <img 
        src={Paket3}
        alt="paket3"
        onClick={() => handleNavigation('/paket3')}
        width="510" 
        height="120"
        />
      </div>
    </div>
  );
};

const jarak = {
    margin: '5px'
}

export default Paket;
