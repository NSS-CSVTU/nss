import React from "react";
import unicef from "../images/unicef.png";
import fitindia from "../images/fitIndia.png";
import ebsb from "../images/EBSB.png";
import digitalIndia from "../images/digitalIndia.png";
import swachbharat from "../images/swachbharat.png";
import { useMediaQuery } from "react-responsive";
function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });
  return (
    <>
      <div className="footer-top flex flex-wrap justify-center mx-auto bg-gray-400">
        <img
          className="lg:w-1/5 md:w-1/5 sm:mx-0 w-1/2 mx-4 sm:p-10"
          src={unicef}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-4 sm:p-12"
          src={ebsb}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-4 sm:p-12"
          src={digitalIndia}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-4"
          src={swachbharat}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-4 sm:p-16"
          src={fitindia}
        />
      </div>
      <div className="footer-bottom flex bg-gray-500 py-4">
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
