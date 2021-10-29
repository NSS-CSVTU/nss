import React from "react";
import kids from "../images/Rectangle 8.png";
import "../css/counter.css";

function Counter() {
  return (
    <div id="counter" className="">
      <div
        id="counterimg"
        className="border m-5 w-full h-full border-black border-10 flex flex-row justify-center text-center"
      >
        <ul className="flex flex-row text-2xl align-center justify-center text-center justify-between text-opacity-100">
          <li>
            <h3 class="counter text-xl lg:text-6xl">1500+</h3>
            <h4 class="text-black text-bold">Number of volunteer</h4>
          </li>
          <li>
            <h3 class="counter text-xl lg:text-6xl">1100+</h3>
            <h4 class="text-black text-bold">Trees Planted</h4>
          </li>
          <li>
            <h3 class="counter text-xl lg:text-6xl">500+</h3>
            <h4 class="text-black text-bold">Camps</h4>
          </li>
          <li>
            <h3 class="counter text-xl lg:text-6xl">100+</h3>
            <h4 class="text-black text-bold">Medical Camps</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
