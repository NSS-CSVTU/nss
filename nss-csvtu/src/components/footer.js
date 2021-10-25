import React from "react";
import unicef from "../images/unicef.png";
import fitindia from "../images/fitIndia.png";
import ebsb from "../images/EBSB.png";
import digitalIndia from "../images/digitalIndia.png";
import swachbharat from "../images/swachbharat.png";
function Footer() {
  return (
    <>
      <div className="footer-top flex justify-between mx-auto bg-gray-400">
        <img className="w-1/5 px-2" src={unicef} />
        <img className="w-1/5 px-2" src={unicef} />
        <img className="w-1/5 px-2" src={unicef} />
        <img className="w-1/5 px-2" src={unicef} />
        <img className="w-1/5 h-auto px-2" src={fitindia} />
      </div>
      <div className="footer-bottom flex bg-gray-500 py-5">
        <p className="footer-content px-2">
          &copy; NSS CSVTU 2021. All Rights Reserved.
        </p>
        <div className="ml-auto flex footer-bottom-right mr-10">
          <p className=" px-4">Privay Policy</p>
          <p className=" px-4">Terms of Service</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
