import React from "react";
import kids from "../images/Rectangle 8.png";
import "../css/counter.css";

function Counter() {
  return (
    <div id="counter" className="p-5">
      <div
        id="counterimg"
        className="border bg-blend-soft-light bg-opacity-50 sm:m-5 w-95 h-full text-xs sm:w-full sm:h-full border-black border-10 flex flex-row justify-center text-center"
      >
        <ul className="flex flex-col sm:flex-row sm:bg-white text-2xl m-1 sm:p-5 sm:m-10 align-center justify-center text-center text-opacity-100">
          <li className="sm:m-5 text-xl border-2 border-gray-400 font-bold bg-white text-black text-opacity-100">
            <h3 class="counter lg:text-6xl">1500+</h3>
            <h4 class="text-black p-3 text-lg lg:text-xl font-bold">
              Number of volunteer
            </h4>
          </li>
          <li className="sm:m-5 text-xl border-2 border-gray-400 bg-white  font-bold text-black  text-opacity-100">
            <h3 class="counter text-black lg:text-6xl">1100+</h3>
            <h4 class="text-black p-3 text-lg lg:text-xl font-bold">
              Trees Planted
            </h4>
          </li>
          <li className="sm:m-5 text-xl font-bold border-2 border-gray-400 bg-white text-black  text-opacity-100">
            <h3 class="counter  lg:text-6xl">500+</h3>
            <h4 class="text-black p-3 text-lg lg:text-xl font-bold">Camps</h4>
          </li>
          <li className="sm:m-5 text-xl font-bold border-2 border-gray-400 text-black bg-white text-blue  text-opacity-100">
            <h3 class="counter  lg:text-6xl">100+</h3>
            <h4 class="text-black p-3 text-lg lg:text-xl font-bold">
              Medical Camps
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
