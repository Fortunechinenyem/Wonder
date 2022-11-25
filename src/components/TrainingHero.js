import React from "react";
import logo from "../images/image (9).jpg";

const TrainingHero = () => {
  return (
    <>
      <section className=" ">
        <div className=" mx-auto ">
          <img
            src={logo}
            alt={TrainingHero.jpg}
            className="mx-auto "
            height="500px"
            style={{ objectFit: "cover" }}
          />
          <div className="text-center section__title section__title--services">
            <h1>Training</h1>
          </div>
        </div>
      </section>
      );
    </>
  );
};

export default TrainingHero;
