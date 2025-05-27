import React from "react";
import Meet from "../Home/Meet";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="w-full bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="Images/about.png"
              alt="About Our Store"
              className="w-full rounded-xl shadow-md"
            />
          </div> 

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Our Store
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              We are your trusted online shopping destination, offering a wide
              range of products at unbeatable prices. Whether you're looking for
              fashion, electronics, home essentials, or something special, we've
              got it all.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our goal is to make online shopping easy, convenient, and
              enjoyable. With fast delivery, secure payments, and dedicated
              customer support, we ensure your satisfaction at every step.
            </p>
            <div className="mt-6">
              <Link to={"/shop"}>
                <button className="bg-[#0b68c4] font-semibold text-white py-2 px-6 rounded-full shadow cursor-pointer">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Meet />
    </>
  );
}

export default About;
