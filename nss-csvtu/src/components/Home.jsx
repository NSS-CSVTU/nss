import Carousel from "./carousel";
import React from "react";
import Feed from "./Feed";
import Announcement from "./Announcement";

function Home() {
  return (
    <div>
      <Carousel />
      <Announcement />
      <Feed />
    </div>
  );
}

export default Home;
