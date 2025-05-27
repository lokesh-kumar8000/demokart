import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { cartContext, cartItamData } from "../MainContext";

function OurProducts() {
  const [limits, setLimits] = useState(12);
  const [limitData, setLimitData] = useState([]);
  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];



  const getProduct = () => {
    categories.forEach((category)=>{
      axios
        .get(`https://dummyjson.com/products/category/${category}?limit=${limits}`)
        .then((success) => {
          setLimitData(success.data.products); 
        })
        .catch((e) => {
          console.log(e);
        });
    })
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="w-full py-10 ">
      <ToastContainer position="top-center" autoClose={1000} />
      <div className=" contianer mx-auto  ">
        <h2 className=" text-[40px] sm:text-[56px] text-center font-bold  ">
          Our <span className="text-red-500">Products</span>{" "}
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {limitData.map((data, i) => {
            return (
              <CartUi
                thumbnail={data.thumbnail}
                title={data.title}
                price={data.price}
                id={data.id}
                category={data.category}
              />
            );
          })}
        </div>
        <Link to={"/Shop"} className=" flex justify-center  ">
          <button className=" py-2 px-3 bg-red-600 text-white mt-3 cursor-pointer ">
            Veiws All Product{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;

const CartUi = (props) => {
  // console.log(props)
  const { cartData, setCartData } = useContext(cartItamData);
  const { setCart, cart } = useContext(cartContext);
  const cartUiAdd = () => {
    let toastHandling = false;
    setCartData((prew) => {
      toastHandling = prew.some((item) => item.id === props.id);
      return toastHandling ? prew : [...prew, props];
    });
    if (!toastHandling) {
      setCart(cart + 1);
      toast.success("Cart Added!"); 
    } else { 
      toast.error("Cart AllReady added!"); 
    } 
  };
  return (
    <div className=" col-span-1 mt-[25px] p-[15px] mx-[15px] mb-[4px] shadow bg-[#f7f8f9] cursor-pointer   relative our overflow-hidden ">
      <div className="flex justify-center group ">
        <img
          src={props.thumbnail}
          className=" max-w-[150px] max-h-[180px] py-6 group-hover:scale-[105%] duration-200 "
          alt=""
        />
      </div>
      <div className=" flex justify-between font-bold text-[14px]  my-[10px] ">
        <h4> {props.title} </h4>
        <h4> ${props.price} </h4>
      </div>
      <div className=" king absolute left-0 bottom-[-100%] hover:bottom-0  bg-[#e3e3e345] w-full h-[100%] duration-200 flex flex-col justify-center items-center  ">
        <Link to={`/productdetail/${props.id}`}>
          <button className=" py-2 bg-black hover:text-black hover:bg-transparent duration-150 border border-black text-white px-3 rounded-full cursor-pointer w-[130px] font-bold my-3 ">
            {" "}
            Buy Now{" "}
          </button>
        </Link>
        <button
          onClick={cartUiAdd}
          className="py-2 bg-red-500 border border-red-500 hover:text-red-500 hover:bg-transparent duration-150 text-white px-3 rounded-full cursor-pointer w-[130px] font-bold"
        >
          {" "}
          Add To Cart{" "}
        </button>
      </div>
    </div>
  );
};
