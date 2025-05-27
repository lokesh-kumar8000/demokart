import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { cartContext } from "../MainContext";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Header() {
  let { cart } = useContext(cartContext);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const [toggle, setToggle] = useState(false);
  return (
    <header className=" sticky top-0 z-50">
      <nav className="bg-[#ffffff] text-[#333] border-gray-200 px-4 lg:px-6 py-2.5 shadow ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link className="flex items-center">
            <img
              src="Images/logos.png" 
              className="mr-3 w-full h-[60px]"
              alt="DemoKart"
            />
          </Link>

          <ul className=" hidden lg:flex mt-4 font-medium  lg:space-x-8 lg:mt-0 items-center">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 border-b hover:text-[#0b68c4] hover:underline duration-300 font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/abouts"
                className="block py-2 pr-4 pl-3 border-b hover:text-[#0b68c4] hover:underline duration-300 font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-2 pr-4 pl-3 border-b hover:text-[#0b68c4] hover:underline duration-300 font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 "
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to={"/contacts"}
                className="block py-2 pr-4 pl-3 border-b hover:text-[#0b68c4] hover:underline duration-300 font-bold border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 "
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className=" hidden lg:flex items-center gap-3">
            <Link to={"/shop/carts"}>
              <li className=" p-2 text-xl flex cursor-pointer ">
                <BsCart2 />{" "}
                <sup className=" bg-red-600 p-2 rounded-[50%] text-white flex justify-center items-center ">
                  {cart}
                </sup>
              </li>
            </Link>
            <Link>
              <li className=" p-2 text-[18px] flex cursor-pointer px-3 py-2 font-semibold   bg-[#0b68c4] text-white rounded-[15px]  ">
                LogIn
              </li>
            </Link>
          </div>
          {toggle ? (
            <RxCross1
              onClick={() => setToggle(!toggle)}
              className=" block lg:hidden text-3xl"
            />
          ) : (
            <IoMdMenu
              onClick={() => setToggle(!toggle)}
              className=" block lg:hidden text-3xl "
            />
          )}
          <div className= {`w-full h-screen absolute top-[100%] bg-[rgb(0,0,0,0.8)] ${toggle? 'left-0':'left-[-100%]' } duration-300 block lg:hidden `} >
            <ul className=" text-white text-center text-xl sm:text-2xl mt-4 font-medium  lg:space-x-8 lg:mt-0 items-center">
              <li>
                <Link
                  to="/" 
                   onClick={() => setToggle(!toggle)}
                  className="block shadow-xl bg-transparent py-2 pr-4 pl-3  hover:text-[#0b68c4] hover:underline duration-300 font-bold "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/abouts"
                   onClick={() => setToggle(!toggle)}
                  className="block py-2 shadow-xl pr-4 pl-3  hover:text-[#0b68c4] hover:underline duration-300 font-bold "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                   onClick={() => setToggle(!toggle)}
                  className="block py-2 shadow-xl pr-4 pl-3  hover:text-[#0b68c4] hover:underline duration-300 font-bold "
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={"/contacts"}
                   onClick={() => setToggle(!toggle)}
                  className="block py-2 pr-4 shadow-xl pl-3 hover:text-[#0b68c4] hover:underline duration-300 font-bold  "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className=" text-center flex flex-col lg:flex-row items-center lg:items-start text-white  ">
              <Link to={"/shop/carts"}  onClick={() => setToggle(!toggle)} >
                <li className=" p-2 text-3xl shadow-xl my-1.5 lg:my-0 flex cursor-pointer ">
                  <BsCart2  />{" "}
                  <sup className=" bg-red-600 p-2 rounded-[50%] text-white flex justify-center items-center ">
                    {cart}
                  </sup>
                </li>
              </Link>
              <Link>
                <li className=" p-2 text-[18px]  shadow-xl flex cursor-pointer px-3 py-2 font-semibold   bg-[#0b68c4] text-white rounded-[15px]  ">
                  LogIn
                </li>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
