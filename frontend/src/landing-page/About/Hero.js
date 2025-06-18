import React from "react";

function Hero() {
  return (
    <div className="container">
 <div className="row py-5  ">
  <div className="col-12 text-center">
    <h1 className="display-6 fw-semibold  mb-3" style={{ color: "#3B7CD3" }}
>
      We pioneered learning-based stock market exploration in India.
    </h1>
    <p className="lead text-secondary">
      Now, we're pushing boundaries with our tech-driven innovation.
    </p>
  </div>
</div>


      {/* Content Rows */}
      <div className="row border-top text-muted fs-6" style={{ textAlign: "justify" }}>
        {/* Left Column */}
        <div className="col-12 col-md-6 p-4 p-md-5" >
          <p>
            StockNest started its journey in 2025 with a mission to help students
            and beginners explore the stock market using real-time APIs,
            technology, and a learning-first approach.
          </p>
          <p>
            Built by passionate developers, StockNest focuses on removing
            barriers to entry for learning how stock trading, investments, and
            market data work in real-world scenarios.
          </p>
          <p>
            Our open-source-driven model and hands-on practice environment aim
            to create India’s most beginner-friendly stock market education
            ecosystem.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-4 p-md-5" >
          <p>
            In addition, StockNest is an ever-evolving project built for
            learning — from APIs to backend logic, frontend interaction to
            real-world deployment — a perfect sandbox for full-stack exploration.
          </p>
          <p>
            Inspired by the likes of Zerodha, we're focused on self-growth,
            curiosity, and building meaningful tech products.
          </p>
          <p>
            StockNest is more than a project — it’s a journey toward mastering
            the stock tech stack. Stay tuned for updates, features, and new
            integrations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
