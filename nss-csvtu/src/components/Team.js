import React from "react";
import ASK from "../images/abc/4.png";
import PC from "../images/abc/3.png";
import MKV from "../images/abc/2.png";
import SS from "../images/abc/1.png";
import KK from "../images/abc/5.png";
import logo from "../images/nss.png";

function Team() {
  return (
    <div className="bg-white-400 w-full flex sm:w-2/3 justify-center">
      <div className="flex flex-wrap sm:grid grid-cols-1 w-full gap-4 p-5 justify-center md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white  border-2 border-black flex align-center justify-center  text-center text-4xl rounded">
          <div
            class="bg-cover bg-white text-black bg-center bg-blend-soft-light bg-opacity-50"
            style={{
              "background-image": `url(${logo})`,
              backgroundSize: "80%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="text-xl p-5 relative font-bold text-center lg:text-xl">
              “NOT ME BUT YOU”
            </p>
            <p className="relative p-3 text-sm font-bold text-center lg:text-sm">
              The Motto of NSS, it reflects the essence of democratic living and
              upholds the need for self-less service.
            </p>
          </div>
        </div>
        <div className="bg-white align-center border-2 border-black  p-5 col-start-1 col-end-1 row-start-2 row-end-2 rounded flex gap-10 justify-center">
          <img className="" src={ASK} alt="" />
          {/* <div className="grid grid-col-1 m-1">
            <a href="https://www.facebook.com/ListenKabir">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="https://www.instagram.com/listenkabir/?utm_medium=copy_link"></i>
            </a>
            <a href="#">
              <i className="fab fa-envelope"></i>
            </a>
          </div> */}
        </div>

        <div className="bg-white p-5 rounded border-2 border-black col-start-2 col-end-2 row-start-2 row-end-2 flex gap-10 justify-center">
          <img className="" src={SS} alt="" />
          {/* <div className="grid grid-col-1 m-1 ">
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
          </div> */}
        </div>
        <div className="bg-white p-5 rounded border-2 border-black col-start-1 col-end-1 row-start-1 row-end-1 flex gap-10 justify-center">
          <img className="" src={MKV} alt="" />
          {/* <div className="grid grid-col-1 m-1">
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
          </div> */}
        </div>
        <div className="bg-white p-5 rounded border-2 border-black col-start-3 col-end-3 row-start-1 row-end-1 flex gap-10 justify-center">
          <img className="" src={KK} alt="" />
          {/* <div className="grid grid-col-1 m-1 ">
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
          </div> */}
        </div>
        <div className="bg-white p-5 col-start-3 border-2 border-black col-end-3 row-start-2 row-end-2 rounded flex gap-10 justify-center">
          <img className="" src={PC} alt="" />
          {/* <div className="grid grid-col-1 m-1">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Team;
