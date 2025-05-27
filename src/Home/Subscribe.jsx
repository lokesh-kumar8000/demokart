import React from "react";

function Subscribe() {
  return (
    <div className=" w-full bg-[#d4ced0] py-[75px]">
      <div className=" mx-auto max-w-[1170px]">
        <div className=" w-[100%] md:w-[70%] text-center mx-auto">
          <h3 className="text-[25px] sm:text-[35px] lg:text-[40px] font-bold mb-[15px] ">
            Subscribe To Get Discount Offers
          </h3>
          <p className=" mb-[15px] px-2 text-[#0c0c0c] tracking-wider font-extralight text-[15px] sm:text-[16px] ">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}  
          </p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            className=" bg-white w-[79%] outline-0 py-[20px] px-[25px] my-[15px] rounded-full "
          /> <br />
          <button className=" bg-[#f7444e] font-medium border border-1-[#f7444e] text-white py-[10px] px-[50px] tracking-wide cursor-pointer hover:bg-transparent hover:text-[#f7444e] duration-200 rounded-full ">
            Subscribe 
          </button>
        </div> 
      </div>
    </div>
  );
}

export default Subscribe;
