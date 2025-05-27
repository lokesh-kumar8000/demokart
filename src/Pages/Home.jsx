import React from "react";
import Hero from "../Home/Hero";
import ShopWith from "../Home/ShopWith";
import OurProducts from "../Home/OurProducts";
import Subscribe from "../Home/Subscribe";
import Revews from "../Home/Revews";
import About from "./About";

function Home() {
  return (
    <div className=" overflow-x-hidden " >
      <Hero />
      <ShopWith />
      <OurProducts/> 
      <Subscribe/> 
      <Revews/> 
    </div>
  );
}

export default Home;
