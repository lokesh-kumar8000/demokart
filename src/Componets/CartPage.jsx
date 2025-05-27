import React, { useContext, useEffect, useState } from "react";
import { cartContext, cartItamData } from "../MainContext";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IoMdTrash } from "react-icons/io";

function CartPage() {
  const { cartData } = useContext(cartItamData);
  return (
    <div className="w-full py-4  ">
      <ToastContainer position="top-center" autoClose={1000} />
      <div className=" contianer mx-auto ">
        <h2 className=" py-6 px-3 font-bold text-2xl flex items-center gap-2 ">
          {" "}
          Your Cart{" "}
          <span>
            {" "}
            <FaShoppingBag className=" text-red-400 text-4xl " />{" "}
          </span>{" "}
        </h2>

        {cartData.length === 0 ? <Empty /> : <AddTo />}
      </div>
    </div>
  );
}

const AddTo = () => {
  const [quantities, setQuantities] = useState({});
  const { cartData, setCartData } = useContext(cartItamData);
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    const initialQuantities = {};
    cartData.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cartData]);

  const handleQuantityChange = (id, type, stock) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      let updated =
        type === "inc"
          ? Math.min(current + 1, stock)
          : Math.max(current - 1, 1);
      return { ...prev, [id]: updated };
    });
  };

  const removeHandling = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
    setCart(cart - 1);
    toast.error("Product Remove Your Cart!");
  };

  // Total price section
  const totalPrice = cartData.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + Math.floor(item.price) * qty;
  }, 0);

  const gst = (totalPrice * 0.18).toFixed(2);
  const finalPrice = (totalPrice + parseFloat(gst)).toFixed(2);
  return (
    <>
      {cartData.map((item, index) => {
        const qty = quantities[item.id] || 1;
        return (
          <div
            key={index}
            className=" py-5 sm:px-3 bg-[#f2f2f2]  shadow-xl grid grid-cols-6  my-6 items-center rounded-[8px] "
          >
            <div className=" col-span-1 overflow-hidden rounded-xl mx-3">
              <Link to={`/productdetail/${item.id}`}>
                <img
                  src={item.thumbnail}
                  className="  md:w-[150px] lg:w-[200px]  md:h-[150px] lg:h-[200px] " 
                  alt=""
                />
              </Link>{" "}
            </div>
            <div className=" col-span-5 text-[14px] grid grid-cols-7 sm:grid-cols-5 lg:grid-cols-6 items-center justify-between gap-1 sm:gap-3 me-5 ">
              <div className=" py-3 px-2 hidden lg:flex  justify-center items-center col-span-1 cursor-pointer text-white bg-[#0b68c4] font-semibold rounded-full ">
                {item.category}
              </div>
              <div className=" text-[10px] sm:text-[14px] lg:text-[16px] ms-2 font-semibold col-span-3 sm:col-span-1 capitalize ">
                {" "}
                {item.title}{" "}
              </div>
              <div className="flex items-center justify-end col-span-2 gap-3">
                <h2 className="font-semibold hidden sm:flex ">Qunitity</h2>
                <div className=" flex  gap-2 md:gap-5 lg:gap-8 items-center border border-gray-200 rounded-full py-2 px-3 sm:px-6  ">
                  <button
                    onClick={() => 
                      handleQuantityChange(item.id, "dec", item.stock) 
                    }
                  >
                    <FaMinusCircle className="text-[#2976c3] cursor-pointer text-[16px] sm:text-xl hover:text-[#0b68c4]" />
                  </button>
                  <div className=" text-[16px] sm:text-xl "> {qty}</div>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, "inc", item.stock)
                    }
                  >
                    <FaPlusCircle className="text-[#2976c3] cursor-pointer text-[16px] sm:text-xl hover:text-[#0b68c4]" />
                  </button>
                </div>
              </div>
              <div className=" text-center font-semibold col-span-1 capitalize text-[16px] sm:text-xl">
                {" "}
                $ {Math.floor(item.price) * qty}{" "}
              </div>
              <div
                onClick={() => {
                  removeHandling(item.id);
                }}
                className=" py-2 px-5 col-span-1 cursor-pointer text-white flex justify-center items-center bg-red-600 font-semibold rounded-full "
              >
                <span className = " hidden sm:flex " >Remove</span> 
                <span className="flex sm:hidden text-2xl" ><IoMdTrash /></span> 
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-end">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
          <h3 className="text-xl font-bold mb-4 border-b pb-2">
            Price Summary
          </h3>

          <div className="flex justify-between mb-2">
            <span>Total Price</span>
            <span>$ {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST (18%)</span>
            <span className="text-red-500">+ $ {gst}</span>
          </div>

          <div className="flex justify-between mt-4 border-t pt-3 font-bold text-lg">
            <span>Final Payable</span>
            <span className="text-green-600">$ {finalPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;

const Empty = () => {
  return (
    <div className=" mb-8  w-full flex justify-center  items-center ">
      <div>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
          alt=""
        />
        <h2 className=" text-center text-xl font-semibold text-[#424553] ">
          Hey, it feels so light!
        </h2>
        <p className=" text-[14px] text-[#7e818c] my-5 ">
          There is nothing in your bag. Let's add some items.
        </p>
        <div className=" flex justify-center  ">
          <Link
            to={"/shop"}
            className=" p-[10px] border border-red-600 text-red-600 "
          >
            ADD ITEMS FROM Shop
          </Link>
        </div>
      </div>
    </div>
  );
};
