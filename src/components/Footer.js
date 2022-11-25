import React from "react";
import logo from "../images/wonderlogo.svg";

const Footer = () => {
  return (
    <>
      <div className="card text-center">
        <div className="footer">
          <div className="logo mb-3">
            <img src={logo} alt={Footer.svg} />
          </div>
          ​Copyright © 2022, WonderGold. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
