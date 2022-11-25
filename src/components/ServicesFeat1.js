import React from "react";
import logo from "../images/image (2).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const ServicesFeat1 = () => {
  return (
    <section className="container mt-3">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Project Management</h2>
          <p>
            {" "}
            An Expert in Development of especially small and mediem enterprises
          </p>
          <Link to="/sevices">
            <Button variant="dark" className="nav-item">
              Learn More <BsArrowRight />
            </Button>
          </Link>
        </div>
        <img
          src={logo}
          alt={ServicesFeat1.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default ServicesFeat1;
