import React from "react";

const Signup = () => {
  return (
    <div className="container mt-5 px-4 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold display-6 " style={{ color: "#3B7CD3" }}>Open a free demat & trading account</h1>
        
        <p className="lead text-muted">
          Start investing brokerage free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="row align-items-center justify-content-center g-4">
        {/* Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="/Media/Assets/signup.png"
            alt="Signup"
            className="img-fluid"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>

        {/* Form */}
        <div className="col-12 col-md-6">
          <div className="p-4  ">
            <h3 className="fw-semibold mb-2 text-muted">Signup Now</h3>
            <p className="text-muted">Or track your existing application</p>

            <form>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold text-muted">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg w-75 text-muted"
                  id="phone"
                  placeholder="Enter your mobile number"
                />
              </div>

              <button type="submit" className="btn btn-custom-primary btn-lg w-50 py- mt-3">
                Get OTP
              </button>

              <p className="mt-4 text-muted small">
                By proceeding, you agree to the StockNest{" "}
                <a href="#" className="text-decoration-none">Terms</a> &{" "}
                <a href="#" className="text-decoration-none">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
