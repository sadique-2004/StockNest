import React from "react";
import { Link } from "react-router-dom";

const LeftSection = ({
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
        <div className="col-6 p-5">
          <img
            src={imgUrl}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-1"></div>
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

          <div className="mt-3">
            <a href={googlePlay} className="me-2">
              <img
                src="/Media/Assets/googlePlayBadge.svg"
                alt="Google Play"
                style={{ width: "120px", height: "40px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="/Media/Assets/appstoreBadge.svg"
                alt="App Store"
                style={{ width: "120px", height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
