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
                    <span className="border-b-4 ml-2">05-06-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1fzN6Siy8EVR27wONivb5UYSdZO-B5cwL/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Regarding World Environment Day &nbsp;
                  </a>
                </li>

                 <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">10-05-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1tWIZ4Q3F-l7XZWj7Ax5c8PcPm3ITT0l9/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Program officers meeting on hybrid mode on 10 May 2023 &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">21-04-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/13HD6343aOJ2GKuJPPcTNWJTgYEyqk9TJ/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Latest Social Media Account Updates of NSS Bhopal &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">10-04-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1KOHdbNvBbR4pkzpMR7opfTB48cf9qAQ1/view?usp=share_link" className="anchor hover:bg-blue-800 hover:underline">
                  Regarding gathering of information concerning School of Siksha Mitra Initiative Scheme &nbsp;
                  </a>
                </li>
                
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">10-02-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1v_jVM_9bY-Q2KXmxid0Tk3JIapFKU3Bp/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Regarding Y20 event details &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">10-02-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1sFtaQfpnyLh6cHgjPZk6QVbQLrwH69dO/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  Regarding Y20-23 event concept  &nbsp;
                  </a>
                </li>
                 <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">09-02-2023</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1AyhEW-gdC-Z1d8f0ak1euUr6MfDtgOHA/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                    Yuva Samvaad (Covering Letter RD Bhopal)  &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">09-02-2023</span>
                  </p>
                  <a href="https://docs.google.com/spreadsheets/d/1zFknaYG3K7tiw5CDiZq8KIUsb7bqj_1k/edit?usp=sharing&ouid=107296010853974004440&rtpof=true&sd=true" className="anchor hover:bg-blue-800 hover:underline">
                  Action plan for Yuva Samvaad &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">25-11-2022</span>
                  </p>
                  <a href="https://drive.google.com/file/d/1Lu9K8kRmdU4cw5kD98mSCSm5m53P3mbf/view?usp=sharing" className="anchor hover:bg-blue-800 hover:underline">
                  7 day special unit camp list of NSS units affiliated with NSS cell of CSVTU</a>
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
