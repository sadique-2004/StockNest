import React from "react";
import { Link } from "react-router-dom";

const RightSection = ({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  buttonText,
}) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-5 p-5 d-flex flex-column justify-content-center">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mt-3">
            {tryDemo && (
              <Link to={tryDemo} className="text-decoration-none me-2">
                {buttonText} →
              </Link>
            )}

            {learnMore && (
              <Link to={learnMore} className="text-decoration-none me-2">
                Learn More →
              </Link>
            )}
          </div>

          
        </div>
        <div className="col-6 p-5">
          <img
            src={imgUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default RightSection;
