import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Revews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Review = [
    {
      img: "Images/rohit.webp",
      name: "Rohit Sharma",
      pera: "Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit...",
    },
    {
      img: "Images/virat.jpg",
      name: "Virat Kohli",
      pera: "Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis...",
    },
    {
      img: "Images/hardik.jpg",
      name: "Hardik Pandya",
      pera: "Labore modi voluptatibus accusantium sapiente nam! Quaerat.",
    },
    {
      img: "Images/sanju.jpg",
      name: "Sanju Samson",
      pera: "Deserunt eius officiis ipsum ducimus ad labore modi.",
    },
  ];

  return (
    <div className="w-full py-[70px] ">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-3xl sm:text-[56px] px-[20px] font-bold text-center">
          Customer's Testimonial
        </div>
        <Slider {...settings}>
          {Review.map((d, i) => (
            <div key={i}>
              <ReviewUi img={d.img} name={d.name} pera={d.pera} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Revews;

const ReviewUi = (props) => {
  return (
    <div className="mt-[56px] p-5 max-h-[420px] bg-[#0560ba] text-white mx-4 sm:mx-[30px] shadow">
      <div className="flex justify-center">
        <img
          className="w-[150px] rounded-full"
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="text-center">
        <h5 className="font-bold py-3 text-xl">{props.name}</h5>

        <div className="text-[15px] tracking-wider text-gray-400">Customer</div>
        <div className=" flex justify-center ">
          <FaStar className=" text-amber-400 " />
          <FaStar className=" text-amber-400 " />
          <FaStar className=" text-amber-400 " />
          <FaStar className=" text-amber-400 " />
          <FaStar className=" text-amber-400 " />
        </div>
        <p className="my-3 font-extralight tracking-wider">{props.pera}</p>
      </div>
    </div>
  );
};
