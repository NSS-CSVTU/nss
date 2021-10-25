import React from "react";
import "../css/footer.css";
import unicef from "../images/unicef.png";
import fitindia from "../images/fitIndia.png";
import ebsb from "../images/EBSB.png";
import digitalIndia from "../images/digitalIndia.png";
import swachbharat from "../images/swachbharat.png";
function Footer() {
  return (
    <div>
      <div className="footer-top">
        <img src={unicef} />
        <img src={digitalIndia.png} />
        <img src={swachbharat.png} />
        <img src={ebsb.png} />
        <img src={fitindia} />
      </div>
      <div className="footer-bottom">
        <p className="footer-content">
          &copy; NSS CSVTU 2021. All Rights Reserved.
        </p>
        <p>Privay Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}

export default Footer;
