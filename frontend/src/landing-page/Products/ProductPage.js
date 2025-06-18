import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const Products = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="/Media/Assets/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on web browser only for now."
        tryDemo="https://stock-nest-dashboard.vercel.app/"
        learnMore="https://stock-nest-dashboard.vercel.app/"
        buttonText="Try Live Demo"
      />
      <RightSection
        imgUrl="/Media/Assets/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="#"
        buttonText="In devlopment"
        learnMore="#"
        googlePlay="#"
        appStore="#"
        
      />
      <LeftSection
        imgUrl="/Media/Assets/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        buttonText="In devlopment"
        googlePlay="#"
        appStore="#"
      />
      <RightSection
        imgUrl="/Media/Assets/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="#"
        buttonText="In devlopment"
        googlePlay="#"
        appStore="#"
      />
      <LeftSection
        imgUrl="/Media/Assets/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="#"
        appStore="#"
        tryDemo="#"
        buttonText="In devlopment"
      />

      <Universe />
    </>
  );
};

export default Products;
