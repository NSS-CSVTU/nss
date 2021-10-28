import Carousel from "./carousel";
import React from "react";
import Feed from "./Feed";
import Announcement from "./Announcement";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Carousel />
      <Announcement />
      <Feed />
      <Testimonials />
    </div>
  );
}

export default Home;
