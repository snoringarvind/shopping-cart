import React from "react";
import portraitHome from "./portraitHome.jpg";
import landScapeHome from "./landScapeHome.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <picture>
        <source srcSet={portraitHome} media="(max-width: 520px)" />
        <source srcSet={portraitHome} media="(max-device-width: 520px)" />
        <img src={landScapeHome} alt={landScapeHome} />
      </picture>
    </div>
  );
};

export default Home;
