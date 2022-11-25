import React from "react";

import logo from "../images/img 2.jpg";

const AboutHero = () => {
  return (
    <section className="container row ">
      <div className="d-flex  g-5 mx-auto ">
        <div className="col-md text-center">
          <h1>About Wonder</h1>
        </div>
        <img
          src={logo}
          alt={AboutHero.jpg}
          className="col-md "
          height="500px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
export default AboutHero;
