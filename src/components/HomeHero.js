import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const HomeHero = () => {
  return (
    <section className="hero  container">
      <div className="">
        <div className="herotext">
          <h1>Wonder Gold Chinenyem </h1>
          <h4> Project Manager || Writer</h4>

          <Link to="/sevices">
            <Button variant="light" className="nav-item">
              Read Bio <BsArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
