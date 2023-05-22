import React from "react";
import kids from "../images/Rectangle 8.png";
import "../css/counter.css";

function Counter() {
  return (
    <div id="counter" className="p-5">
      <div
        id="counterimg"
        className="border bg-blend-soft-light bg-opacity-50 opacity-80  sm:w-75 h-full text-xs sm:h-full border-black border-10 flex flex-row justify-center text-center"
      >
        <ul className="flex flex-col sm:flex-row sm:bg-white text-2xl m-1 sm:p-5 sm:m-10 align-center justify-center text-center text-opacity-100">
          <li className="sm:m-5 text-xl border-2 border-gray-400 font-bold sm:border-none bg-white text-black text-opacity-100">
            <h3 class="counter lg:text-6xl">6350</h3>
            <h4 class="text-black px-2 text-lg lg:text-xl font-bold">
              Number of volunteer
            </h4>
          </li>
          <li className="sm:m-5 text-xl border-2 border-gray-400 bg-white sm:border-none  font-bold text-black  text-opacity-100">
            <h3 class="counter text-black lg:text-6xl">6042</h3>
            <h4 class="text-black text-lg lg:text-xl font-bold">
              Trees Planted
            </h4>
          </li>
          <li className="sm:m-5 text-xl sm:border-none font-bold border-2 border-gray-400 bg-white text-black  text-opacity-100">
            <h3 class="counter  lg:text-6xl">85</h3>
            <h4 class="text-black text-lg lg:text-xl font-bold">Special Camps</h4>
          </li>
          <li className="sm:m-5 text-xl sm:border-none font-bold border-2 border-gray-400 text-black bg-white text-blue  text-opacity-100">
            <h3 class="counter  lg:text-6xl">79</h3>
            <h4 class="text-black text-lg lg:text-xl font-bold">
              NSS Units
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
