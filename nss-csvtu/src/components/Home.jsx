import Carousel from "./carousel";
import React from "react";
import Feed from "./Feed";
import Announcement from "./Announcement";
import Team from "./Team";

function Home() {
  return (
    <div>
      <Carousel />
      <Announcement />
      <Team />
      <Feed />
    </div>
  );
}

export default Home;
