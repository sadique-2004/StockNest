import React from "react";

function PricingCard({ image, title, description }) {
  return (
    <div className="col-md-4 col-sm-12 p-4 text-center">
      <img src={image} alt="icon" className="img-fluid mb-3" />
      <h4 className="text-muted">{title}</h4>
      <p className="text-muted fs-6">{description}</p>
    </div>
  );
}

export default PricingCard;
