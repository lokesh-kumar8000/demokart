import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Filter( props ) {
  // console.log(props.setRangeData,'props')
  const [catgreie, setCatgreie] = useState([]); 
  const {slug} = useParams();  
  const filt = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((success) => {
        // console.log(success.data);
        setCatgreie(success.data);
      })
      .catch((error) => { 
        console.log(error); 
      });
  };

  useEffect(() => {
    filt();
  }, []);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return ( 
    <> 
      {/* All category */} 
      {/* <div className="  shadow font-bold text-2xl text-center p-4 ">
        {" "}
        All Category{" "}
      </div> */}
      <Link to="/shop">
        <button className=" shadow font-bold text-xl lg:text-2xl text-center bg-[#0b68c4] text-white duration-150  w-full cursor-pointer  py-3 ">
          ALL Category
        </button> 
      </Link> 
      
      <div>
        {catgreie.map((d, i) => {
          return (
            <Link to={`/shop/${d.slug}`} key={i}>
              <div className= {` cursor-pointer ps-5 shadow py-3 font-semibold hover:bg-[#8bc4fe] duration-150 ${slug==d.slug?'bg-[#8bc4fe]':''}`} >
                {" "}
                {d.name}{" "} 
              </div>
            </Link>
          );
        })}
      </div>

 {/* Ratting seaction */} 
      <div>
       <div className=" text-white bg-[#0b68c4]  shadow font-bold text-xl lg:text-2xl text-center p-3 lg:p-4 ">
        {" "}
        Ratting{" "}
      </div>
        <Link to={4} onClick={()=> props.setRating(4)}>
          <div className="w-full hover:bg-[#8bc4fe] cursor-pointer ps-5 text-start shadow py-3 font-bold flex items-center"  >
            <FaStar className=" text-amber-300 " /> 
            <FaStar className=" text-amber-300 " /> 
            <FaStar className=" text-amber-300 " /> 
            <FaStar className=" text-amber-300 " /> 
            <FaStar className=" text-amber-300 " /> 
            <span className=" ps-3 "> above 4 </span> 
          </div>
        </Link>
        <Link to={3} onClick={()=> props.setRating(3)}>
          <div className="w-full cursor-pointer hover:bg-[#8bc4fe] ps-5 text-start shadow py-3 font-bold flex items-center ">
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <span className=" ps-3 "> above 3 </span>
          </div>
        </Link>
        <Link to={2} onClick={()=> props.setRating(2)} >
          <div className="w-full cursor-pointer hover:bg-[#8bc4fe] ps-5 text-start shadow py-3 font-bold flex items-center ">
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <span className=" ps-3 "> above 2 </span>
          </div>
        </Link>
        <Link to={1} onClick={()=> props.setRating(1)} > 
          <div className="w-full hover:bg-[#8bc4fe] cursor-pointer ps-5 text-start shadow py-3 font-bold flex items-center ">
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <FaStar className=" text-amber-300 " />
            <span className=" ps-3 "> above 1 </span>
          </div>
        </Link>
      </div> 

       {/* Range section  */}
    <div>
      <div className=" bg-[#0b68c4] text-white shadow font-bold text-xl lg:text-2xl text-center p-3 lg:p-4">
        {" "}
        Range{" "} 
      </div> 
      <div className=" flex gap-3 my-3 shadow p-4 "> 
        <input className=" w-[40%] border  "  type="number" name="" id="" value={ props?.rangeData?.start }   onChange={(e)=>props?.setRangeData( (prev) => ({ ...prev , start: Number(e.target.value)}) )}  /> 
        <span>To</span>
        <input className=" w-[40%] border  " type="number" name="" id=""  value={ props?.rangeData?.end }  onChange={(e)=>props.setRangeData( (prev) => ({ ...prev , end: Number(e.target.value)}))} /> 
      </div>
    </div>
    </>
  );
}

export default Filter;
