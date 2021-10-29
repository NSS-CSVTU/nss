import Carousel from "./carousel";
import React from "react";
import Feed from "./Feed";
import Announcement from "./Announcement";
import Testimonials from "./Testimonials";
import Counter from "./counter";

function Home() {
  return (
    <div>
      <Carousel />
      <br />
      <Announcement />
      <Counter />
      <Feed />
      <Testimonials />
    </div>
  );
}

export default Home;
