import axios from "axios";
import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci"; 
import { FaHeart } from "react-icons/fa"; 
import { useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cartContext, cartItamData } from "../MainContext";

function ProductDetail() {
  const { productId } = useParams();
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(1); 
  const [ src , setSrc ] = useState(details.thumbnail); 
  const [ watchList , setWatchList ] = useState(true); 
  const {cart,setCart} = useContext(cartContext);   
  const{ cartData,setCartData } = useContext(cartItamData);  



  const DetailPage = () => { 
    return axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((success) => {
        setDetails(success.data);
      })
      .catch((error) => { 
        console.log(error); 
      }); 
  }; 

  useEffect(() => {
    DetailPage();
  }, []);


  const detailsProduct  = () => {
    let toastHandling = false; 
       setCartData((prew)=>{
           toastHandling = prew.some((item)=> item.id === details.id);  
   
           return toastHandling? prew : [...prew ,details] 
         }) 
         if(!toastHandling){
           setCart(cart+1)
           toast.success('Cart Added!'); 
         }else{ 
           toast.error('Cart AllReady Added!') 
         } 
  }

  return (
    <div className=" w-full bg-gray-100">
        <ToastContainer position="top-center" autoClose={1000} /> 
      <div className="container max-w-[1300px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */} 
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={src === undefined ? details.thumbnail:src}  
              alt="Product" 
              className="w-full h-auto rounded-lg shadow-md mb-4" 
            />
            <div className="flex gap-4 py-4 justify-start overflow-x-auto">
              {details?.images?.map((d, i) => {
                return (
                  <img
                    key={i} 
                    src={`${d}`} 
                    alt="Thumbnail 4" 
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 transition duration-300 shadow"
                    onMouseEnter={ ()=> setSrc(d) }
                  />
                );
              })}
            </div>
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{details.title}</h2> 
            <div className="mb-4"> 
              <span className="text-2xl font-bold mr-2"> 
                {" "}
                ${Math.floor(details.price)}{" "}
              </span>
              <span className="text-green-500 line-through"> 
                ${Math.floor(details.price) + 5}
              </span>
            </div>
            <div className="text-2xl font-medium mr-2">
              {" "}
              Stock: {details.stock}{" "}
            </div>

            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-gray-600">
                {" "} 
                {details.rating} ({details?.reviews?.length} reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-5">{details.description}</p> 
            <div className="text-2xl font-medium py-2">
              {" "}
              Total price : ${Math.floor(details.price) * count}
            </div>
            <div className="mb-6 flex items-center gap-[50px]">
              <div className="text-sm font-medium text-gray-700 mb-1">
                {" "}
                Quantity:{" "}
              </div>
              <div className=" flex gap-5 bg-amber-50 ">
                <button
                  onClick={() => setCount(count - 1)}
                  disabled={count <= 1 ? true : false}
                  className=" px-2  hover:bg-gray-400 text-xl cursor-pointer "
                >
                  -
                </button>
                <button className=" px-2  hover:bg-gray-400 "> {count} </button>
                <button
                  onClick={() => setCount(count + 1)}
                  disabled={count >= details.stock ? true : false}
                  className=" px-2  hover:bg-gray-400 text-xl cursor-pointer "
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <button onClick={detailsProduct} className=" cursor-pointer bg-[#0b68c4] flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart 
              </button>
              <button onClick={()=> setWatchList(!watchList)} className= {`cursor-pointer bg-gray-200 hover:bg-gray-300  flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md   `}>
                {
                  watchList ? <CiHeart className=" text-xl " /> : <FaHeart className=" text-xl text-red-600 " />
                }
               
                Wishlist
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{details.warrantyInformation}</li>
                <li>{details.shippingInformation}</li>
                <li>{details.availabilityStatus}</li>
              </ul>
            </div>
            {/* Reveiws  */}
            <div className=" w-full my-7 ">
              <h1 className=" font-bold text-2xl "> Comments </h1>

              {details?.reviews?.map((d, i) => {
                return(

                   <div key={i} className=" flex gap-5  my-4  "> 
                  <div>
                    <FaUserCircle className=" text-5xl text-gray-500 " />
                  </div>
                  <div>
                    <h2 className=" font-semibold text-[17px] " >  { d.reviewerName } </h2>
                    <h2 className="" >  { d.reviewerEmail }  </h2>
                    {/* <h2>  { d.date } </h2> */} 
                    <h2> { d.comment } </h2> 
                  </div> 
                </div>
                )
               
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
