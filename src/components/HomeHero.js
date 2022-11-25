import React from "react";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

const HomeHero = () => {
  return (
    <>
      <section className="hero ">
        <div className="">
          <div className="herotext">
            <h1>Wonder Gold Chinenyem </h1>
            <h4>Project Manager || Writer || Leadership Coach</h4>
            <Link to="/about" className="btn btn-light mt-4">
              Read Bio <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
