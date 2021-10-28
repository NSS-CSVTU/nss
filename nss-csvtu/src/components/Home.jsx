import Carousel from "./carousel";
import React from "react";
import Feed from "./Feed";
import Announcement from "./Announcement";
import Team from "./Team";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Carousel />
      <Announcement />
      <Team />
      <Feed />
      <Testimonials />
    </div>
  );
}

export default Home;
