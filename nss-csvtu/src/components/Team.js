import React from "react";
import ASK from "../images/4.png";
import PC from "../images/3.png";
import MKV from "../images/2.png";
import SS from "../images/1.png";
import KK from "../images/5.png";

function Team() {
  return (
    <div className="bg-blue-400 flex m-10 justify-center lg:m-5">
      <div className="grid grid-cols-1 gap-4 justify-center md:grid-cols-3 lg:grid-cols-3 ">
        <div className="bg-white p-6 rounded bg">
          <img className="hover:scale-100" src={ASK} alt="" />
          <div className="grid grid-col-1 m-10 ">
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
        <div className="bg-red-200">
          <div className="bg-black p-3 rounded bg">
            <img className="hover:scale-100" src={SS} alt="" />
          </div>
          <div className="bg-black p-3 rounded bg">
            <img className="hover:scale-100" src={MKV} alt="" />
          </div>
          <div className="bg-black p-3 rounded bg">
            <img className="hover:scale-100" src={KK} alt="" />
          </div>
          <div className="bg-black p-3 rounded bg">
            <img className="hover:scale-100" src={PC} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
