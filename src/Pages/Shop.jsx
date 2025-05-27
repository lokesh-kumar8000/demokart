import React, { useState } from "react";
import Filter from "../Componets/Filter";
import AllProduct from "../Componets/AllProduct";

function Shop() {
  const [rating, setRating] = useState(1);
  const [rangeData, setRangeData] = useState({ start: 1, end: 100000 });
  // console.log('range',rangeData);
  return (
    <div className=" bg-[#F9F9F9] text-[#333333] w-full " >
      <div className=" grid grid-cols-1 md:grid-cols-7 lg:grid-cols-6 pt-3 max-w-[1300px] mx-auto ">
        <div className=" col-span-1 sm:col-span-2 lg:col-span-1 order-2 md:order-1 "> 
          <Filter 
            setRating={setRating} 
            setRangeData={setRangeData} 
            rangeData={rangeData} 
          /> 
        </div> 
        <div className=" col-span-1 sm:col-span-5 order-1 md:order-2 ">  
          <AllProduct rating={rating} rangeData={rangeData} /> 
        </div> 
      </div>
    </div>
  );
}

export default Shop;
