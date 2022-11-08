import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div className="banner-container">
        <div className="banner z-20">
          <div className="pt-16 pl-20 z-40">
            <h2 className="text-white text-4xl font-bold">
              Good Food <br />
              Choice Are <br />
              Good Investment
            </h2>
            <h5 className="text-white my-4 font-semibold">
              Foodies is the largest homemade <br /> food delivery platform.
            </h5>
            <button className="btn btn-outline btn-error">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
