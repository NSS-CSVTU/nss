import React from "react";
import "./css/meeting.css";

const Minutesofmeeting = () => {
  return (
      <div className="pages-height w-screen overflow-x-auto">
        <div className="m-5 bg-blue-200">
        <h1 className="tb-title m-3 bg-blue-200">
          National Service Scheme Chhattisgarh Swami Vivekanand Technical
        </h1>
        <h1 className="tb-title m-5 bg-blue-200">
          General Reports:
        </h1>
        </div>
        <table className="GeneratedTable table-auto text-center md:w-full lg:h-full  .border-2 .border-black">
          <tr>
            <th style={{ width: "50px" }}>S.No.</th>
            <th style={{ width: "50px" }}>Report</th>
            <th style={{ width: "50px" }}>Download</th>

          </tr>
          <tr>
            <td style={{ width: "50px" }}></td>
            <td style={{ width: "50px" }}></td>
            <td style={{ width: "50px" }}></td>


          </tr>
          <tr>
            <td style={{ width: "50px" }}>1</td>
            <td style={{ width: "50px" }}>NSS Tilda</td>
            <td style={{ width: "50px" }}>

              <a
                  href="https://drive.google.com/file/d/1QbYmFB7AhOp-G-bKvOQ5EY0KBi2R1uUF/view?usp=sharing"
                  target="_blank"
              >
                <i className="fa fa-download" aria-hidden="true"></i>
              </a></td>

          </tr>
          <tr>
            <td style={{ width: "50px" }}>2</td>
            <td style={{ width: "50px" }}>Pre-RD Report</td>
            <td style={{ width: "50px" }}> <a
                href="https://drive.google.com/file/d/1RD_vozxB78yZLNkHUOr65WtudNqGAav0/view?usp=sharing"
                target="_blank"
            >
              <i className="fa fa-download" aria-hidden="true"></i>
            </a></td>

          </tr>
          <tr>
            <td style={{ width: "50px" }}>3</td>
            <td style={{ width: "50px" }}>Report(November 2021)
            </td>

            <td style={{ width: "50px" }}>
              <a
                  href="https://drive.google.com/file/d/1RD_vozxB78yZLNkHUOr65WtudNqGAav0/view?usp=sharing"
                  target="_blank"
              >
                <i className="fa fa-download" aria-hidden="true"></i>
              </a></td>

          </tr>
        </table>
      </div>
  );
};

export default Minutesofmeeting;
