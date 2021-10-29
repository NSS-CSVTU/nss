import React from "react";
import kids from "../images/Rectangle 8.png";
import "../css/counter.css";

function Counter() {
  return (
    <div id="counter" className="">
      <div
        id="counterimg"
        className="border bg-opacity-70 sm:m-5 w-95 h-full text-xs sm:w-full sm:h-full border-black border-10 flex flex-row justify-center text-center"
      >
        <ul className="flex flex-col sm:flex-row sm:bg-white text-2xl m-1 sm:p-5 sm:m-10 align-center justify-center text-center justify-between text-opacity-100">
          <li className="sm:m-5 text-bold bg-white text-black text-opacity-100">
            <h3 class="counter text-lg lg:text-6xl">1500+</h3>
            <h4 class="text-black text-lg lg:text-xl text-bold">
              Number of volunteer
            </h4>
          </li>
          <li className="sm:m-5 text-lg bg-white  text-bold text-black  text-opacity-100">
            <h3 class="counter  lg:text-6xl">1100+</h3>
            <h4 class="text-black text-lg lg:text-xl text-bold">
              Trees Planted
            </h4>
          </li>
          <li className="sm:m-5 text-bold bg-white text-black  text-opacity-100">
            <h3 class="counter text-xl lg:text-6xl">500+</h3>
            <h4 class="text-black text-lg lg:text-xl text-bold">Camps</h4>
          </li>
          <li className="sm:m-5 text-bold  bg-white text-blue  text-opacity-100">
            <h3 class="counter text-xl lg:text-6xl">100+</h3>
            <h4 class="text-black text-lg lg:text-xl text-bold">
              Medical Camps
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
