import React from "react";
import Team from "./Team";

function Announcement() {
  return (
    <>
      <div className="relative notice_parent flex flex-wrap justify-center sm:flex">
        <Team className="teams" />
        <div className="sm:w-full sm:m-5 md:m-0 md:w-1/3 w-screen ml-auto font-bold p-4 notice_board opacity-95">
          <div className="border-b-2 py-4">
            <h2>
              <i className="fas fa-list-ul"></i>&nbsp;Notice Board
            </h2>
          </div>
          <div className="">
            <ul id="Notice" className="cs-iconlist border-b-2 py-4">
              <marquee
                direction="up"
                height="270px"
                behavior="scroll"
                scrollamount="2"
                onmouseover="this.stop(); "
                onmouseout="this.start();"
              >
                 <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">01-01-2022</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1ssHbaPBc7kxmYZko8j3JceSiX8LkOizP/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    Regarding National Youth Day(12th Jan 2022) &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">04-12-2021</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1IWVq7sPfdf4MYmllESVtOREJLCK1Dkw2/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    Regarding Aazadi Ka Amrit Mahotsav &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">04-12-2021</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1Lu9K8kRmdU4cw5kD98mSCSm5m53P3mbf/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Regarding Free Vaccination Campaign</a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">04-12-2021</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1uIYvoQ0bSEqK2Z9LI_7tDhKsBCpiReF-/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    In regards to the prevention and awareness of common non-communicable diseases  &nbsp;
                    &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">26-11-2021</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1YA9mSkdhXHHkvUSB2CcoLA4XDZ8Kcnks/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    SOCIAL MEDIA WORKSHOP :- A virtual mode online webinar regarding the use of social media for the promotion of activities through social media. &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">08-11-2021 to 10-11-2021</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1N4lbuusPsE4OYRGWV5j1MCwL-vvvuA8E/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    National Service Scheme State Level 3 days 'Chintan Shivir'(meditation camp) at Prayog Ashram, Tilda, District Raipur C.G. &nbsp;

                  </a>
                </li>


              </marquee>
            </ul>
            <div className="text-center text-lg">
              <a
                href="/officialdocs"
                className="btn btn-danger"
                style={{ marginleft: "15px" }}
              >
                <i className="fas fa-eye"></i> View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcement;
