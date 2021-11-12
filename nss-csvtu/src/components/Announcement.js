import React from "react";
import Team from "./Team";

function Announcement() {
  return (
    <>
      <div className="relative notice_parent flex flex-wrap justify-center sm:flex">
        <Team className="teams" />
        <div className="sm:w-1/3 w-screen ml-auto font-bold p-4 notice_board opacity-95">
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
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit ab aspernatur ipsa magnam placeat beatae architecto
                    quasi, esse dolorem eius alias, possimus recusandae quo?
                    Quasi perferendis cum maiores voluptatibus in! &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Accusantium nemo, dicta consequuntur iste fuga
                    consectetur natus dolorum facere repellendus sed neque sit
                    ut similique, aspernatur quas. Illo necessitatibus similique
                    maxime? &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Illum saepe dolor assumenda placeat voluptates
                    tenetur, veniam quasi ipsam neque vitae nihil, in, fuga
                    natus accusantium id! Vitae modi beatae dolorem? &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quaerat, unde quis ipsam cum omnis ullam quam quisquam
                    quia placeat distinctio, perspiciatis incidunt repudiandae
                    consectetur? Placeat nulla velit at quas neque? &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consequuntur eligendi distinctio laborum accusantium
                    optio maiores quisquam molestiae repellat, animi ducimus
                    possimus dignissimos perspiciatis neque odio dolor fugit
                    ipsam vero? Repellat! &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Explicabo, odio porro? Sequi beatae velit adipisci
                    repellat, iusto laborum autem voluptatum itaque repudiandae
                    quasi nostrum ab ratione reprehenderit deserunt provident!
                    Vitae? &nbsp;
                  </a>
                  <a href="" className="anchor" target="_blank">
                    For more details
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Possimus excepturi nam iusto vero eum sequi enim
                    perferendis ipsa, natus aperiam dolores reiciendis alias
                    dignissimos quia quo voluptatem inventore officia soluta!
                    &nbsp;
                  </a>
                  <a href="" className="anchor" target="_blank">
                    Registration Form
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href="" className="anchor">
                    &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Aut quae voluptates, nisi quis mollitia ipsam magni
                    quibusdam nobis vitae, ratione neque. Officiis a iusto, quae
                    consectetur excepturi natus perspiciatis corporis? &nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href=" " className="anchor">
                    &nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Amet explicabo adipisci fugit quod, et asperiores
                    sequi deleniti quidem beatae sunt. Exercitationem quibusdam
                    suscipit tempora nisi nulla iste atque ad doloremque.&nbsp;
                  </a>
                </li>
                <li className="my-4">
                  <p className="date">
                    <i className="far fa-calendar-alt"></i>
                    <span className="border-b-4 ml-2">30-08-2021</span>
                  </p>
                  <a href=" " className="anchor">
                    &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Architecto dolorem quibusdam beatae, nulla reiciendis
                    consequatur fugit praesentium eum nihil! Eligendi laudantium
                    molestiae necessitatibus voluptatibus eveniet ratione eius
                    impedit eum fugiat!&nbsp;
                  </a>
                </li>
              </marquee>
            </ul>
            <div className="text-center text-lg">
              <a
                href="UnivNoticeBoard.aspx"
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
