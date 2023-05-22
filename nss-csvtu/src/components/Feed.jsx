import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import preRD from "../images/preRD.JPG";
import ChintanShivir from "../images/ChintanShivir.jpg"
import PO_1Dayworkshop from "../images/PO_1Dayworkshop.jpg"
import FitIndia from "../images/events/fitIndiaFreedomRun.jpg"
import SocialMediaWorkshop from "../images/SocialMediaWorkshop.jpg"
import NIC from "../images/events/NIC2021.png";
import NYFCG from "../images/events/NYFCG.jpg";
import advCamp from "../images/events/advCamp.jpg";
import MegaClean from "../images/events/MegaCleanliness.jpg";
import UnivRD from "../images/events/UnivRD.jpg";
import advisory from "../images/advisoryMeet.jpg";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Feed = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container my-5 mx-auto">
          <h1 className="feed_heading mb-5 px-5">Latest Events</h1>
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
          >
            <div class="flex flex-wrap justify-center align-middle">
            <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={NYFCG}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        National Youth Festival 2023
                      </h1>
                      <p class="leading-relaxed mb-3">
                      The volunteers of National Service Scheme cell of Chhatisgarh Swami Vivekananda Technical University, Bhilai represented Chhattisgarh State at the National Youth Festival organized in Hubli, Dharwad, Karnataka from 12 to 16 January 2023 by the Government of India, Youth Program. In this youth festival, participants from different states and union territories of the country got an opportunity to learn about their culture etc.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={advCamp}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                         Adventure Camp 2022
                      </h1>
                      <p class="leading-relaxed mb-3">
                      3rd Batch for the National Adventure Camp organised by Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports, Dharamshala, H.P has been departed from Chhattisgarh. The arrangement was Managed by Chhattisgarh Swami Vivekanand Technical University,Bhilai. All the best to the selected Volunteers.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide><SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={MegaClean}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Mega Cleanliness Drive 2022
                      </h1>
                      <p class="leading-relaxed mb-3">
                      On 19th October 2022, National Service Scheme Cell of Chhattisgarh Swami Vivekananda Technical University, Bhilai (C.G.) organized a university level mega cleanliness drive at Gudicha Manch Sector 10, Bhilai under Clean India Campaign. They run around 1.5km under Fit India Run 3.O and collected the plastic material. Spread awareness in the society.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide><SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={FitIndia}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Fit India Freedom Run 2022
                      </h1>
                      <p class="leading-relaxed mb-3">
                      On 3rd October NSS Unit of Shankracharya Technical Campus Junwani Bhilai Chhattisgarh organized Fit India Freedom Run 3.0 at Jayanti Stadium Bhilai were NSS Volunteers Participated in Run. Some glimpses.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={UnivRD}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                       One Day Workshop & University-Level RD selection
                      </h1>
                      <p class="leading-relaxed mb-3">
                      On this workshop, under National Service Scheme cell of CSVTU, training of Programme Ofiicers of affiliated units was organized at Vishwesharaiya Bhawan. Also on this occasion, the selection of volunteers for the Republic Day parade concluded where their parade skills and cultural capabilities were assessed, as well as distribution of B&C certificates. Program conducted by Ms. Kuzur.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={advisory}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                       NSS Advisory Board Meeting
                      </h1>
                      <p class="leading-relaxed mb-3">
                      A meeting held at CSVTU, in presence of 
Dr. M. K. Verma sir (vice Chancellor CSVTU)
Shri D. N. Sirsant sir ( Registrar CSVTU)
Dr. D. N. Garhwal sir( Regional director, Bhopal)
Dr. Samrendra singh sir, Dr. S. R. Thakur Sir, Dr. P. B. Deshmukh sir, Dr. D. S. Raghuwanshi sir and other respected guests from different colleges </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={NIC}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        National Integration Camp 2021
                      </h1>
                      <p class="leading-relaxed mb-3">
                      National Integration Camp- 2021, Hisar (Haryana)- This camp was organized by Govt of India, Ministry of Youth Affairs and Sports, NSS Regional Directorate Delhi at Chaudhary Charan Singh Haryana Agricultural University, Hisar from 16 to 22nd December 2021.
By presenting Dance, Singing, Drama, and Mimickry, the Volunteers made full use of this opportunity by entertaining the fellow NSS volunteers with the sounds of their homeland.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={PO_1Dayworkshop}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        One Day Workshop
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Nss Csvtu Bhilai conducted a one day workshop for programme officers on 03 Dec 2021.
                        The  guests  were Prof. M. K. Verma (Hon'ble Vice Chancellor,CSVTU) , Dr. K. K. Verma (Registrar-CSVTU) , Dr. Samrendra Singh (State NSS Officer) , Dr. R. P. Agrawal (Programme coordinator-Hemchand Yadav University, Durg) , Dr. D.S. Raghuwanshi (Programme Co-ordinator -CSVTU, Bhilai).
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={SocialMediaWorkshop}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Social Media Workshop
                      </h1>
                      <p class="leading-relaxed mb-3">
                        on 25th November 2021, NSS Cell Hemchand Yadav University, Durg Chhattisgarh has organized a virtual mode online webinar regarding the use of social media for the promotion of activities through social media. In this webinar, Shri A S Kabir Regional Director, RD Madhya Pradesh - Chhattisgarh, Government of India had said “we have to reach out to the people by using social media, with the pace of time- Along with this, we have to change ourself and the activities happening in backward areas can also reach the state, national level, and international level easily." </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0 w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={ChintanShivir}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        NSS State Level - Chintan Shivir
                      </h1>
                      <p class="leading-relaxed mb-3">
                        A three-day meditation camp was organised by the National Service Scheme Cell of Chhattisgarh State at Prayog Ashram Tilda, District Raipur Ch.G. from 8 to 10 November 2021 Program coordinators, district organizers and program officers and volunteers of various universities of the state participated in this camp.
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={preRD}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Pre-RDC Selection 2021
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Pre-RDC (Republic Day Camp) selection will be held at
                        NSS Unit of BITD today in the watchful eyes of
                        honourable guests- Shri A.S Kabir, Regional Director NSS
                        Dr Samrendra Singh, State NSS officer Ms. Uma P.
                        BalaRaju, NCC Officer, BIT Durg Mr Chandrakant Sahu, NCC
                        Officer, ITI Bhilai Dr. D.S. Raghuvanshi, CSVTU NSS
                        Coordinator Mr. Ashutosh Jain, Para Medical Staff SSSCN
                        Junwani, Bhilai
                      </p>
                      <div class="flex items-center flex-wrap ">
                        <a href="/regularevent" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                          Learn More
                          <svg
                            class="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
             
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Feed;
