import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
