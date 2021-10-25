import React from "react";
import "./css/meeting.css";

const Minutesofmeeting = () => {
  return (
    <div className=" ">
      <div class="inner_right" id="skipCont">
        <div class="title-outer">
          <h1 class="page__title title" id="page-title">
            Minutes Of The Meeting:
          </h1>
        </div>
        <div class="scroll-table">
          <table class="views-table cols-5">
            <thead>
              <tr>
                <th class="views-field views-field-counter" scope="col">
                  S.No.{" "}
                </th>
                <th class="views-field views-field-title" scope="col">
                  Title{" "}
                </th>
                <th
                  class="views-field views-field-field-tender-srart-date"
                  scope="col"
                >
                  Start Date{" "}
                </th>
                <th
                  class="views-field views-field-field-tender-end-date"
                  scope="col"
                >
                  Time{" "}
                </th>
                <th class="views-field views-field-field-attached" scope="col">
                  Attachment{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd views-row-first">
                <td
                  class="views-field views-field-counter"
                  data-label="
            S.No.          "
                >
                  1{" "}
                </td>
                <td
                  class="views-field views-field-title"
                  data-label="
            Title          "
                >
                  Volunteer Time Bank-Kartavya APP{" "}
                </td>
                <td
                  class="views-field views-field-field-tender-srart-date"
                  data-label="
            Start Date          "
                >
                  <span
                    class="date-display-single"
                    property="dc:date"
                    datatype="xsd:dateTime"
                    content="2019-08-16T00:00:00+05:30"
                  >
                    16-Aug-2019
                  </span>{" "}
                </td>
                <td
                  class="views-field views-field-field-tender-end-date"
                  data-label="
            Time          "
                >
                  <span
                    class="date-display-single"
                    property="dc:date"
                    datatype="xsd:dateTime"
                    content="2019-09-05T00:00:00+05:30"
                  >
                    4:00pm-5:00pm
                  </span>{" "}
                </td>
                <td
                  class="views-field views-field-field-attached"
                  data-label="
            Attachment          "
                >
                  <div class="item-list">
                    <ul>
                      <li class="first last">
                        <a
                          href="https://drive.google.com/file/d/1RD_vozxB78yZLNkHUOr65WtudNqGAav0/view?usp=sharing"
                          target="_blank"
                        >
                          <i class="fa fa-download" aria-hidden="true"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Minutesofmeeting;
