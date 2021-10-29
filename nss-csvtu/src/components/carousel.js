import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import workshop from "../images/one day workshop.JPG";
import hanoda from "../images/upload/workshop/DSC_8379.JPG";
import b1 from "../images/b1.jpg";
import dsc from "../images/upload/workshop/DSC_1400.JPG"

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

const images = [
  workshop,
  hanoda,
  dsc
];
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']

const Carousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 740px)" });
  return (
    <>
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
        style={{ height: isMobile ? "50vh" : "80vh" }}
      >
        {images.map((img, i) => (
          <SwiperSlide style={{ height: "auto" }}>
            <img src={img} className="w-full h-full" />
           </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

//APP Component
export default Carousel;
