import React from "react";
import ASK from "../images/4.png";
import PC from "../images/3.png";
import MKV from "../images/2.png";
import SS from "../images/1.png";
import KK from "../images/5.png";

function Team() {
  return (
    <div className="bg-blue-400 w-full flex sm:w-2/3 justify-center">
      <div className="flex flex-wrap sm:grid grid-cols-1 w-full gap-4 p-5 justify-center md:grid-cols-3 lg:grid-cols-3">
        <div className="p-6 align-center justify-center text-center text-4xl rounded bg">
          <h1>OUR TEAM</h1>
          <p></p>
        </div>
        <div className="bg-white p-5 col-start-1 col-end-2 row-start-1 row-end-1 rounded flex gap-10 justify-center">
          <img className="" src={ASK} alt="" />
          <div className="grid grid-col-1 m-1">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="bg-white p-5 rounded col-start-3 col-end-3 row-start-2 row-end-2 flex gap-10 justify-center">
          <img className="" src={SS} alt="" />
          <div className="grid grid-col-1 m-1 ">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="bg-white p-5 rounded col-start-2 col-end-3 row-start-2 row-end-2 flex gap-10 justify-center">
          <img className="" src={MKV} alt="" />
          <div className="grid grid-col-1 m-1">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="bg-white p-5 rounded col-start-1 col-end-2 row-start-2 row-end-2 flex gap-10 justify-center">
          <img className="" src={KK} alt="" />
          <div className="grid grid-col-1 m-1 ">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="bg-white p-5 col-start-3 col-end-3 row-start-1 row-end-1 rounded flex gap-10 justify-center">
          <img className="" src={PC} alt="" />
          <div className="grid grid-col-1 m-1">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
