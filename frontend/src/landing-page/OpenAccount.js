import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

function OpenAcount() {
  return (
    <div className="container-fluid align-items-center justify-content-center d-flex flex-column  py-5 mt-5">
      <h2 className="text-center text-muted">Open a STOCK NEST account</h2>
      <p className="text-center mb-3">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <SignedIn>
        <a
          href="https://stock-nest-dashboard.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-custom-primary text-center"
          style={{ margin: "auto" }}
        >
          Start investing →
        </a>
      </SignedIn>

      <SignedOut>
        <SignUpButton mode="modal">
          <button
            className="btn btn-lg col-8 col-sm-6 col-md-4 col-lg-2 btn-custom-primary text-center"
            style={{ margin: "auto" }}
          >
            Sign up for free
          </button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
}

export default OpenAcount;
