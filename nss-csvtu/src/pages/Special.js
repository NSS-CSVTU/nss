import React from 'react'

const Special = () => {
    return (
      <div className="pages-height">
        <section className="mt-5">
          <div className="container">
            <div className="justify-content-center mb-5">
              <div className=" text-center heading-section">
                <span>About Us</span>
                <h2 className="mb-3">Our Mission | Vision & Plans</h2>
              </div>
            </div>
            {/* <!------> */}
            <div className="tabs m-4">
              <div className="">
                <ul className="nav nav-pills nav-fill md:flex block flex-col">
                  <li className="nav-item text-left">
                    <a
                      className="nav-link active py-4"
                      data-toggle="tab"
                      href="#about-1"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-2"
                    >
                      Our Beginning
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-3"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-4"
                    >
                      Our Vision
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-5"
                    >
                      Our Mandate
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-6"
                    >
                      Our Plans
                    </a>
                  </li>
                  <li className="nav-item text-left">
                    <a
                      className="nav-link py-4"
                      data-toggle="tab"
                      href="#about-7"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-----> */}
              <div className="">
                <div className="tab-content">
                  <div className="tab-pane container p-0 active" id="about-1">
                    <div
                      className="img"
                      style={{
                        backgroundImage:
                          'url(${require("../images/nss-logo.png")})',
                      }}
                    ></div>
                    <h3>
                      <a href=" ">About Us</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                  <div className="tab-pane container p-0" id="about-2">
                    <div
                      className="img"
                      // style={{
                      //   backgroundImage: 'url(${require("images/about-2.jpg")})',
                      // }}
                    ></div>
                    <h3>
                      <a href=" ">Our Beginning</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                  <div className="tab-pane container p-0" id="about-3">
                    <div
                      className="img"
                      // style={{
                      //   backgroundImage: 'url(${require("images/about-3.jpg")})',
                      // }}
                    ></div>
                    <h3>
                      <a href=" ">Our Mission</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                  <div className="tab-pane container p-0" id="about-4">
                    <div
                      className="img"
                      // style={{
                      //   backgroundImage: 'url(${require("images/about-4.jpg")})',
                      // }}
                    ></div>
                    <h3>
                      <a href=" ">Our Vision</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                  <div className="tab-pane container p-0" id="about-5">
                    <div
                      className="img"
                      // style={{
                      //   backgroundImage: 'url(${require("images/about-5.jpg")})',
                      // }}
                    ></div>
                    <h3>
                      <a href=" ">Our Mandate</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                  <div className="tab-pane container p-0" id="about-6">
                    <div
                      className="img"
                      // style={{
                      //   backgroundImage: 'url(${require("images/about-6.jpg")})',
                      // }}
                    ></div>
                    <h3>
                      <a href=" ">Our Plans</a>
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, nam eum laborum accusantium corrupti
                      inventore repellendus iste exercitationem eveniet voluptas
                      dolor deleniti quis aliquid aut molestias! Corrupti quo
                      aperiam magni!
                    </p>
                  </div>
                  {/* <!-----> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Special
