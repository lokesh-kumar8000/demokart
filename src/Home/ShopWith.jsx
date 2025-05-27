import React from "react";

function ShopWith() {

    const ShopData = [
        {
            icon :'Images/express-delivery.png',
            title:'Fast Delivery',
            pera : 'variations of passages of Lorem Ipsum available',
        },
        {
            icon :'Images/free-delivery.png ',
            title:'Free Shiping',
            pera : 'variations of passages of Lorem Ipsum available',
        },
        {
            icon :'Images/best-seller.png', 
            title:'Free Shiping',
            pera : 'variations of passages of Lorem Ipsum available',
        },
    ]

  return (
    <div className=" w-full py-[70px]">
      <div className=" max-w-[1300px] mx-auto ">
        <h2 className=" text-[#0c0c0c] font-bold text-[35px] sm:text-[40px] md:text-[56px] px-4 text-center "> 
          {" "}
          Why Shop With Us{" "}
        </h2>

        <div className=" md:grid grid-cols-3">
            {
                ShopData.map(
                    (d,i)=>{
                        return(
                            <ShopCard key={i} icon={d.icon} title = {d.title} pera = {d.pera} />
                        ) 
                    } 
                ) 
            } 
        </div>
      </div>
    </div>
  );
}

export default ShopWith;

const ShopCard = (props) => {
  return (
    <div className=" col-span-1 mt-[45px] py-[45px] px-[50px] bg-[#0560ba] mx-3 text-white text-center rounded-[8px] ">
      <div className=" flex justify-center " >
        <img src= {props.icon}  alt=""  className="w-[48px] lg:w-[60px] invert brightness-0" />
      </div>
      <div>
        <h3 className=" text-[17px] lg:text-[21px] font-bold py-3 tracking-widest ">
          {props.title} 
        </h3> 
        <p className=" mb-4 tracking-wider text-[14px] lg:text-[16px] ">
          { props.pera }
        </p>
      </div>
    </div>
  );
};
