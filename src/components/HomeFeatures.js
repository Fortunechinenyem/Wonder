import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const HomeFeatures = () => {
  return (
    <>
      <section>
        <div className="d-flex m-3 w-75 g-3 mx-auto text-center">
          <div className="card">
            <div className="card-body">
              <h3>Project Portfolio</h3>
              <p className="card-text"></p>
              <Link to="/about" className="btn btn-dark mt-4">
                See More <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
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
