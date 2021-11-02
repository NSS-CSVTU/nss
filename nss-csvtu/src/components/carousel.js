import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import workshop from "../images/1.png";
import hanoda from "../images/2.png";
import dsc from "../images/3.png";
import workshop2 from "../images/one day workshop.JPG";
import hanoda2 from "../images/upload/workshop/DSC_8311.JPG";
import dsc2 from "../images/upload/workshop/DSC_1400.JPG";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

// function Carousel() {
//   return (
//     <>

//       {/* <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
//           {/* <!-- Replace with your content --> */}
//           {/* <div className="px-4 py-6 sm:px-0">
//             <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
//           </div> */}
//           {/* <!-- /End replace --> */}
//         {/* </div>
//       </main> */}
//     </>
//   );
// }

// export default Carousel;

const images = [workshop, hanoda, dsc];
const images2 = [workshop2, hanoda2, dsc2];
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

const Carousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });
  return (
    <>
      <div>
        <Swiper
          // spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          style={{
            height: isMobile ? "60vw" : "80vh",
          }}
        >
          {images.map((imgs, j) => (
            <SwiperSlide style={{ height: "auto" }}>
              <img
                src={imgs}
                className="w-full h-full"  
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

//APP Component
export default Carousel;
