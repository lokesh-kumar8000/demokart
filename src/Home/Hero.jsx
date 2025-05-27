import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  };
  const hero = [
    {
      top: "Sale 20% Off",
      title: "On Everything",
      pera: "   Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatisdelectus repellat modi impedit sequi.",
    },
    {
      top: "Sale 20% Off",
      title: "On Everything",
      pera: "   Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatisdelectus repellat modi impedit sequi.",
    },
    {
      top: "Sale 20% Off",
      title: "On Everything",
      pera: "   Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatisdelectus repellat modi impedit sequi.",
    },
  ];
  return (
    <div>
      <div className=" bg-[url(Images/slider-bg.jpg)] bg-cover lg:bg-fixed bg-center   w-full py-10 px-4 md:pt-[90px] md:pb-19 md:ps-10">
        <div className=" contianer mx-auto ">
          <Slider {...settings}>
              {hero.map((item, index) => {
                return (
                  <HeroUi key={index} top={item.top} title={item.title} pera={item.pera} />
                );
              })}
          </Slider> 
        </div>
      </div>
    </div>
  );
}

export default Hero;

const HeroUi = (props) => {
  return (
    <div className="w-[100%]  md:w-[70%] lg:w-[60%] text-[#333333] ">
      <div className=" text-4xl sm:text-[50px] lg:text-[72px] font-bold text-[#0b68c4]"> {props.top}</div>
      <div className=" text-4xl sm:text-[50px] lg:text-[72px] font-bold ">{props.title} </div>
      <p className="my-5 sm:pe-[100px]">{props.pera}</p>
      <Link to={"/shop"}>
        <button className=" cursor-pointer bg-[#e92e1d] text-white text-[13px] sm:text-[16px] py-1 sm:py-2 px-3 sm:px-5 sm:font-bold ">
          {" "}
          Shop Now{" "}
        </button>
      </Link>
    </div>
  );
};
