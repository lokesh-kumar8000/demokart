import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { cartContext, cartItamData } from "../MainContext";
// import { ToastContainer, toast } from "react-toastify";

function AllProduct(props) {
  const [data, setData] = useState([]);
  const [limit, setLImit] = useState(12);
  const { slug } = useParams();

  const getData = () => {
    const mainAPi =
      slug !== undefined
        ? `https://dummyjson.com/products/category/${slug}?limit=${limit}`
        : `https://dummyjson.com/products?limit=${limit}`;
    axios
      .get(mainAPi)
      .then((response) => {
        const finalData = response.data.products.filter((d) => {
          const ratingValue = d.rating > props.rating;
          const rangeValue =
            d.price >= props.rangeData.start && d.price <= props.rangeData.end;
          return ratingValue && rangeValue;
        });
        setData(finalData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [slug, limit, props.rating, props.rangeData]);

  return (
    <>
      {data.length == 0 ? (
        <div className="flex items-center justify-center h-screen"> 
          <div className="loader" ></div>
        </div>
      ) : (
        <>
          <ToastContainer position="top-center" autoClose={1000} />
          <h2 className=" bg-[#0b68c4] font-bold text-[27px] lg:text-3xl p-2 text-white mx-5 ">
            {" "}
            All Products : {data.length}{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
            {data.map((d, i) => {
              console.log("data", data);

              return <ProductData data={d} key={i} />;
            })}
          </div>
          <div className=" flex justify-center mb-8 ">
            <button
              onClick={() => setLImit(limit + 12)}
              className="bg-[#0b68c4]  duration-200 text-white rounded-[4px] px-4 py-2 cursor-pointer font-bold  "
            >
              Load more
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default AllProduct;

const ProductData = ({ data }) => {
  const { cart, setCart } = useContext(cartContext);
  const { setCartData } = useContext(cartItamData);

  const itemHandling = () => {
    let toastHandling = false;
    setCartData((prew) => {
      toastHandling = prew.some((item) => item.id === data.id);
      return toastHandling ? prew : [...prew, data];
    });
    if (!toastHandling) {
      setCart(cart + 1);
      toast.success("Cart Added!");
    } else {
      toast.error("Cart AllReady Added!");
    }
  };

  return (
    <div className=" w-full bg-white  duration-500 col-span-1  rounded-[4px] shadow relative   ">
      <Link to={`/productdetail/${data.id}`}>
        <div className="  w-full bg-blue-100 overflow-hidden ">
          <img 
            src={data.thumbnail}
            alt=""
            className=" w-[80%] mx-auto bg-blue-100 hover:scale-107 duration-300 ease-in-out  "
          />
        </div>
      </Link> 
      <div className="p-4 "> 
        <Link to={`/productdetail/${data.id}`}> 
          <div className=" font-semibold text-[20px] sm:text-[16px] lg:text-[18px]"> 
            {" "} 
            {data.title}{" "} 
          </div> 
        </Link> 
        <div className=" flex  gap-3 "> 
          <div className="font-medium text-[16px] sm:text-[14px] lg:text-[16px] "> 
            {" "}
            $ {Math.floor(data.price)}{" "} 
          </div>
          <div className="font-medium text-[16px] sm:text-[14px] lg:text-[16px] text-green-600 line-through ">
            {" "}
            ${Math.floor(data.price) + 5}{" "}
          </div>
        </div>
        {/* <div className=" font-medium py-2">{data.category}</div>
        <div> stock : {data.stock} </div> */}
        <div className=" flex items-center text-[16px] sm:text-[14px] lg:text-[16px]  my-1 ">
          {" "}
          <FaStar className=" text-amber-300 " />{" "}
          <FaStar className=" text-amber-300 " />{" "}
          <FaStar className=" text-amber-300 " />{" "}
          <FaStar className=" text-amber-300 " />{" "}
          <FaStar className=" text-amber-300 " />{" "}
          <span className=" ps-2 "> {data.rating}/5</span>
        </div>
        <button
          onClick={itemHandling}
          className="bg-[#0b68c4] duration-200 text-white rounded-[4px] my-3 px-3 text-[16px] sm:text-[14px] lg:text-[16px] lg:px-4 py-2 cursor-pointer "
        >
          {" "}
          Add to cart{" "}
        </button>
      </div>
      <div className=" text-[12px] text-green-500 font-extrabold bg-[#ffffff] px-3 py-2 absolute top-0 right-0 mt-4 me-5 rounded-full ">
        {Math.floor(data.price) / 100} % off
      </div>
    </div>
  );
};
