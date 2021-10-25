import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Feed = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container py-24 mx-auto">
          <h1 className="feed_heading mb-5 ">News Feed</h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div class="flex flex-wrap -m-4">
              <SwiperSlide>
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://i.pinimg.com/originals/8e/51/30/8e51302d51089d0f234dc16314c4e5b6.jpg"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/721x401"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/722x402"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/722x402"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/722x402"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
                <div class="p-4">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/722x402"
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        I Love U Xo Much Neku
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
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
