import React from "react";
import portraitHome from "../Images/woman/portraitHome.jpg";
import landScapeHome from "../Images/woman/landScapeHome.jpg";

const Home = () => {
  return (
    <div className="Home">
      <picture>
        <source srcSet={portraitHome} media="(max-width: 520px)" />
        <img src={landScapeHome} alt={landScapeHome} />
      </picture>
    </div>
  );
};

export default Home;
