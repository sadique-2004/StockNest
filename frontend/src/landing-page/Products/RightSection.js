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
  buttonText = "Try Demo",
}) => {
  return (
    <section className="py-5 bg-light  px-3 px-md-5">
      <div className="container">
        <div className="row align-items-center g-4 flex-column flex-md-row">
          {/* Text Section */}
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="fw-bold mb-3">{productName}</h2>
            <p className="text-muted fs-6">{productDescription}</p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              {tryDemo && (
                <Link
                  to={tryDemo}
                  className="btn btn-primary px-4 rounded-pill text-white"
                >
                  {buttonText} →
                </Link>
              )}
              {learnMore && (
                <Link
                  to={learnMore}
                  className="btn btn-outline-secondary px-4 rounded-pill"
                >
                  Learn More →
                </Link>
              )}
            </div>

            {(googlePlay || appStore) && (
              <div className="mt-4 d-flex flex-wrap gap-3">
                {googlePlay && (
                  <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Media/Assets/googlePlayBadge.svg"
                      alt="Google Play"
                      style={{ width: "140px" }}
                    />
                  </a>
                )}
                {appStore && (
                  <a href={appStore} target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Media/Assets/appstoreBadge.svg"
                      alt="App Store"
                      style={{ width: "140px" }}
                    />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Image Section */}
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img
              src={imgUrl}
              alt={productName}
              className="img-fluid "
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
