import React from "react";

import logo from "../images/img 2.jpg";

const AboutHero = () => {
  return (
    <section className=" ">
      <div className=" mx-auto ">
        <img
          src={logo}
          alt={AboutHero.jpg}
          className="mx-auto "
          height="500px"
          style={{ objectFit: "cover" }}
        />
        <div className="text-center section__title section__title--services">
          <h1>About Wonder</h1>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
