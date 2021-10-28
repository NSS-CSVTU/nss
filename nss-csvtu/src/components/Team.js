import React from "react";
import ASK from "../images/4.png";
import PC from "../images/3.png";
import MKV from "../images/2.png";
import SS from "../images/1.png";
import KK from "../images/5.png";

function Team() {
  return (
    <div className="bg-blue-400 flex m-10 justify-left lg:m-5">
      <div className="grid grid-cols-1 gap-4 justify-center md:grid-cols-3 lg:grid-cols-3">
        <div className="bg-white p-5 rounded grid grid-cols-2">
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
        <div className="bg-white p-6 hidden justify-center text-center text-4xl rounded bg">
          <h1>OUR TEAM</h1>
          <p></p>
        </div>
        <div className="bg-white p-5 rounded grid grid-cols-2">
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
        <div className="bg-white p-5 rounded grid grid-cols-2">
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
        <div className="bg-white p-5 rounded grid grid-cols-2">
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
        <div className="bg-white p-5 rounded grid grid-cols-2">
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
