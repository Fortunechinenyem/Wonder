import React from "react";
import logo from "../images/image (10).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const ServicesFeat2 = () => {
  return (
    <section className="container mt-3">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Training</h2>
          <p> Bringing Men into Nobility</p>
          <Link to="/training">
            <Button variant="dark" className="nav-item">
              Learn More <BsArrowRight />
            </Button>
          </Link>
        </div>
        <img
          src={logo}
          alt={ServicesFeat2.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default ServicesFeat2;
