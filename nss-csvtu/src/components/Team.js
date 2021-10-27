import React from "react";
import ASK from "../images/ASK.png";
import PC from "../images/DSR.jpg";
import MKV from "../images/DR MKV.png";
import SS from "../images/Dr SS.png";
import Registrar from "../images/registrar.sir.images.jpg";

function Team() {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="section-title">
            <div className="bg-title">
              <h1>Team</h1>
            </div>
            <h5>Our Team</h5>
            {/* <h2>Our Leaders</h2> */}
          </div>
          <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center my-2">
              <div className="team-single text-center mb-30">
                <div className="team-top">
                  <div className="d-flex justify-content-center">
                    <div className="team-thumb">
                      <img src={ASK} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="team-details.html">Shri A. S. Kabir</a>
                  </h3>
                  <span>Regional Director, MP-CG, Bhopal</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#79c55d" }}
                    className="fas fa-envelope"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#ff566e" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-center my-2">
              <div className="team-single text-center mb-30">
                <div className="team-top">
                  <div className="d-flex justify-content-center">
                    <div className="team-thumb">
                      <img src={SS} alt="Dr Samrendra Singh" />
                    </div>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="team-details.html">Dr. Samrendra Singh </a>
                  </h3>
                  <span>State NSS Officer , Chhattisgarh</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#79c55d" }}
                    className="fas fa-envelope"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#ff566e" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center my-2">
              <div
                className="team-single text-center mb-30"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="team-top">
                  <div className="d-flex justify-content-center">
                    <div className="team-thumb ">
                      <img src={MKV} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="team-details.html">Dr. M K Verma</a>
                  </h3>
                  <span>Vice Chancellor , CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#79c55d" }}
                    className="fas fa-envelope"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#ff566e" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </div>
            </div>
            <div className="my-2">
              <div className="team-single mb-30">
                <div className="team-top">
                  <div className="">
                    <div className="team-thumb">
                      <img src={Registrar} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="team-details.html">Dr. K K Verma</a>
                  </h3>
                  <span>Registrar, CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#79c55d" }}
                    className="fas fa-envelope"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#ff566e" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </div>
            </div>
            <div className="d-flex justify-content-center my-2">
              <div className="team-single text-center mb-30">
                <div className="team-top">
                  <div className="d-flex justify-content-center">
                    <div className="team-thumb">
                      <img src={PC} alt="" />
                    </div>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="team-details.html">Dr. D S Raghuwanshi</a>
                  </h3>
                  <span>Programme Coordinator, CSVTU</span>
                </div>
              </div>
              <div className="connections d-flex flex-column">
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#1DA1F2" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#79c55d" }}
                    className="fas fa-envelope"
                  ></i>
                </a>
                <a href="#">
                  <i
                    style={{ color: "#ff566e" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
