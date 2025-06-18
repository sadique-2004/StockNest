// import React from "react";

// function Hero() {
//   return (
//     <div className="container ">
//       <div className="row p-5 border-bottom text-center mt-5"> 
//         <h1>Charges</h1>
//         <h3 className="text-muted fs-5">
//           List of all charges and taxes
//         </h3>
//       </div>

//       <div className="row mb-5 p-5 fs-6">
//         <div className="col-4 p-5">
//             <img src="Media/Assets/pricingEquity.svg" alt="icon" className="img-fluid" />
//             <h2 className="text-muted ">Free equity delivery</h2>
//             <p className="text-muted fs-6">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
//         </div>
//         <div className="col-4 p-5">
//             <img src="Media/Assets/intradayTrades.svg" alt="icon" className="img-fluid" />
//             <h2 className="text-muted ">Intraday and F&O trades</h2>
//             <p className="text-muted fs-6">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
//         </div>
//         <div className="col-4 p-5">
//             <img src="Media/Assets/pricingEquity.svg" alt="icon" className="img-fluid" />
//             <h2 className="text-muted ">Free direct MF</h2>
//             <p className="text-muted fs-6">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from "react";

function HeroSection() {
  return (
    <div className="container">
      <div className="row p-5 border-bottom text-center mt-5">
        <h1>Charges</h1>
        <h3 className="text-muted fs-5">List of all charges and taxes</h3>
      </div>
    </div>
  );
}

export default HeroSection;
