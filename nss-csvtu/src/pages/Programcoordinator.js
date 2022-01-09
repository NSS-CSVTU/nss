import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import PC from "../images/DSR.jpg";
import BPO from "../images/DSRSir.jpg";
import PA from "../images/president.jpg";
import POKB from "../images/pokb.jpg";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const Programcoordinator = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="pages-height m-3 ">
       <div className="m-5 bg-blue-200">
                <h1 className="tb-title m-3 bg-blue-200">
                    National Service Scheme Chhattisgarh Swami Vivekanand Technical University
                </h1>
                <h1 className="tb-title m-5 bg-blue-200">
                PROGRAM COORDINATOR
                </h1>
            </div>
        
      <div className="flex flex-col content-around lg:flex-row justify-center">
        <div className="flex-col flex items-center justify-center space-around relative lg:w-full lg:h-full">
          <img
            src={PC}
            className="h-60 mt-5 object-contain relative justify-center border-black border-2"
          />
          <p className="m-2 text-red-800 text-sm text-center font-bold">
            DR. D. S. RAGHUWANSHI
          </p>
          <p className="text-sm text-red-800 text-center font-bold">
            Programme Co-ordinator , CSVTU
          </p>
        </div>
        <div className="text-center lg:text-left relative lg:mt-16 lg:mr-16  flex flex-wrap content-evenly lg:m-5 text-2xl">
          <p className="">
            I am exceedingly gratified to learn that the NSS CSVTU volunteers
            are highlighting its achievements and services for the betterment of
            the society under the guidance of programme officers. NSS instils a
            sense of patriotism among students and inspires them to serve the
            country which makes them responsible citizens also it develops their
            personality.
          </p>
          <p>
            The units have done exemplary work which bridges the gap between
            rural and urban population with a positive outlook for the change in
            society. Taking up Shramdaan, Medical camps, blood donation and
            other creative activities in the adopted villages and village
            campsites bring about the development in the personality of the
            youth and is aimed at spreading up the rural development and
            promoting public awareness.
          </p>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container my-5 mx-auto">
          <h1 className="feed_heading mb-5 px-5">ACHIEVEMENTS</h1>
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
                      src={PA}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Best NSS Program Officer
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0 w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover "
                      src={POKB}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Best NSS Program Officer
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="p-0 w-11/12 mx-auto">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover "
                      src={BPO}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Best NSS Program Officer
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Programcoordinator;
