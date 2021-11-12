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
                      src={preRD}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Pre-RDC
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
