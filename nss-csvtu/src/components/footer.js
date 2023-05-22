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
    <div className="absolute bottom-0 p-0 h-10 w-screen">
      <div className="footer-top flex flex-wrap justify-center mx-auto bg-gray-400">
        <img
          className="lg:w-1/5 md:w-1/5 sm:mx-0 w-1/2 mx-6 sm:p-10"
          src={unicef}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-6 sm:p-10"
          src={ebsb}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-6 sm:p-10"
          src={digitalIndia}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-6 sm:p-10"
          src={swachbharat}
        />
        <img
          className="lg:w-1/5 md:w-1/5 w-1/2 sm:mx-0 mx-6 sm:p-10"
          src={fitindia}
        />
        <p className="mt-4 p-1 text-center hover:text-white hover:underline font-semibold" ><a href="https://linktr.ee/n.deepika" target="_blank">Made by - N Deepika</a> <br></br>(NSS-Volunteer)</p>
       {/* {isMobile &&  <p className="mt-1 p-1 text-center" >Made by - N Deepika and Muskan Kela <br></br>(NSS-SSTC Volunteer)</p>}  */}
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
    </div>
  );
}

export default Footer;
