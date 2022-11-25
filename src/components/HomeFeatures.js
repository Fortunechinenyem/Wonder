import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo1 from "../images/image (1).jpg";
import logo2 from "../images/image (3).jpg";
const HomeFeatures = () => {
  return (
    <>
      <section>
        <div className="d-flex m-3 w-100 g-3  text-center">
          <div className="card ">
            <div className="card-body mx-auto">
              <img
                src={logo1}
                alt={HomeFeatures.jpg}
                className="col-md "
                height="350px"
                style={{ objectFit: "cover" }}
              />
              <h3>Project Portfolio</h3>
              <p className="card-text"></p>
              <Link to="/about" className="btn btn-dark mt-4">
                See More <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body mx-auto">
              <img
                src={logo2}
                alt={HomeFeatures.jpg}
                className="col-md "
                height="350px"
                style={{ objectFit: "cover" }}
              />
              <h3>Published Articles</h3>
              <p className="card-text"></p>
              <Link to="/about" className="btn btn-dark mt-4">
                See More <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatures;
