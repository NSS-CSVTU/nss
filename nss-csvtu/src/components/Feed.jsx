import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import bloodDonate from "../images/files/Blood Donation.JPG";
import SBA from "../images/files/Bharat Swachhta Abhiyan.jpg";
import CCS from "../images/cleanssgi.jpg";
import police from "../images/police.JPG";
import BloodBITD from "../images/BlooddonationBITD.JPG";
import BITR from "../images/upload/blood donation/BIT Raipur 1 (1).JPG";
import preRD from "../images/preRD.JPG";
import ChintanShivir from "../images/ChintanShivir.jpg"
import PO_1Dayworkshop from "../images/PO_1Dayworkshop.jpg"
import ConstitutionDay from "../images/National Constitution Day.jpg"
import SocialMediaWorkshop from "../images/SocialMediaWorkshop.jpg"
import NIC from "../images/events/NIC2021.png";


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
                        src={ConstitutionDay}
                        alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        National Constitution Day
                      </h1>
                      <p class="leading-relaxed mb-3">
                        National Service Scheme, CSVTU,  Bhilai affiliated units celebrated National Constitution Day on 26 November 2021.
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
                        Pre-RDC Selection
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
              <SwiperSlide>
                <div class="p-0 w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={police}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Volunteering With Durg Police
                      </h1>
                      <p class="leading-relaxed mb-3">
                        On the occasion of Navratri and Dussehra to maintain the
                        traffic and law and order situation in Durg-Bhilai and
                        to make the NSS volunteers aware about traffic and law,
                        the volunteers of National Service Scheme of Shri
                        Shankaracharya Technical Campus volunteered to instill
                        awareness and to assist Durg Police.
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
                <div class="p-0 w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={SBA}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Bharat Swachhta Abhiyan
                      </h1>
                      <p class="leading-relaxed mb-3">
                        On the occasion of the 150th Birth Anniversary Year of
                        Mahatma Gandhi, a cleanliness drive was Organized by the
                        National Service Scheme Cell under Swachh Bharat
                        Abhiyan. Volunteers cleaned the pond in the nearby
                        village and expressed the need to have a Healthy and
                        hygienic society.
                      </p>
                      <div class="flex items-center flex-wrap">
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
                <div class="p-0  w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={CCS}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Clean India Campaign
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Under the ongoing Clean India Campaign throughout the
                        whole nation, Volunteers of Shri Shankaracharya Group of
                        Institutions also participated, they cleaned the college
                        campus and through this generated awareness among the
                        public to keep India clean. .
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
                <div class="p-0  w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={BloodBITD}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Blood Donation Campaign
                      </h1>
                      <p class="leading-relaxed mb-3">
                        On the occasion of "Voluntary Blood Donation Day" the
                        volunteers of NSS BITD took an oath to contribute to the
                        nobel cause of blood donation themselves and motivate
                        others to do it too. "Donating Blood is synonymous to
                        Saving a life"
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
                <div class="p-0  w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={BITR}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Blood Donation Campaign
                      </h1>
                      <p class="leading-relaxed mb-3">
                        On the occasion of "Voluntary Blood Donation Day" the
                        volunteers of NSS BIT Raipur contributed in the nobel
                        cause of blood donation themselves and motivated others
                        to do it too.
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
