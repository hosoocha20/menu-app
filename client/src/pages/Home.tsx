import React from "react";
import orderSVG from "../assets/order.svg";
import tabletSVG from "../assets/tablet.svg";
import timeSVG from "../assets/time.svg";
import efficiencySVG from "../assets/efficiency.svg";
import easySVG from "../assets/easy.svg";
import mealSVG from "../assets/family-meal-29.svg";
import qrSVG from "../assets/qr-code-64.svg";

const Home = () => {
  return (
    <div className=" font-inter mt-[-4.5rem]">
      <div className="h-[100vh] home-bg-img w-full bg-white flex  pl-[13vw] gap-[2rem] pt-[5rem]">
        <div className="w-[700px] h-full flex flex-col gap-[2.5rem] mt-[5rem]">
          <h1 className="text-[3rem] font-[600] text-gun-powder-950  mt-[4.5rem]">
            Boost Efficiency, <span className="block">Delight Customers,</span>{" "}
            <span className="block">Enhance your Service</span>
          </h1>
          <p className="">
            Empower customers, optimize operations, maximize profits.
            <span className="block">
              MenuNow - The premier self-ordering solution.
            </span>
          </p>
          <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[9rem] py-3 text-white">
            Get Started
          </button>
        </div>
        <img src={orderSVG} className="w-[35%]" />
      </div>
      <div className="h-[100vh] py-[2rem] px-[3rem]">
        <div className=" h-full rounded-3xl py-[3rem] px-[5rem]  w-full flex gap-[8rem]">
          <img src={mealSVG} className="w-[40%]" />
          <div className="flex flex-col gap-[1.5rem] pt-[8rem]">
            <h2 className="border border-my-mango-400 bg-my-mango-400 text-white w-max p-2 rounded">
              {" "}
              What is SmartMenu
            </h2>
            <p className="text-[2rem] text-gun-powder-950 font-[600]">
              SmartMenu offers a smart way to dine
            </p>
            <p>
              Its a user-friendly self-service ordering software designed to
              enhance the dining experience for both customers and restaurants.
            </p>
            <p>
              With MenuNow, customers can effortlessly browse menus, customize
              orders, and complete payments without the need for waitstaff
              intervention.
            </p>
            <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3  text-white">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen px-[5rem] py-[4rem]">
        <div className="solution-bg-img flex flex-col gap-[2rem] h-full rounded-[2rem] py-[3rem] px-[3rem]">
            <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
              Our Solution
            </h2>
            <p className="text-center">
              We offer two convenient ways to order:
            </p>
            <div className="flex gap-[1rem]  h-full">
                <div className="h-full w-[50%] rounded border bg-white">QR Code</div>
                <div className="h-full w-[50%] rounded border bg-white flex justify-center">
                    <img src={qrSVG} className="w-[60%]"/>
                </div>
                
            </div>
        </div>
        {/* <ul className="list-disc list-inside">
          <li>
            Dedicated Tabletop Kiosk: Enjoy the ease of ordering directly from a
            device placed at each table.
          </li>
          <li>
            QR Code Convenience: Scan the QR code at your table to access our
            mobile-optimized ordering platform using your own device.
          </li>
        </ul> */}
      </div>
      <div className="h-[100vh] flex flex-col justify-center">
        <div className="flex flex-col justify-center  py-[3rem] bg-my-orange-50">
          <h2 className="text-center text-[2.9rem] text-gun-powder-950 w-[50vw] mx-auto my-0 leading-tight pb-[3rem]">
            Enhance your customer experience while boosting efficiency with our
            digitalized table ordering solution.
          </h2>
          <div className="flex text-center  justify-center gap-[6rem]">
            <div className="flex flex-col w-[20rem] gap-4 items-center text-gun-powder-950">
              <img src={timeSVG} className="w-[8vw]" />
              <p className="font-[600]">Reduce wait times</p>
              <p>
                Our digital menu solution allows customers to order directly
                from their table leading to faster service and happier
                customers.
              </p>
            </div>
            <div className="flex flex-col w-[20rem] gap-4 items-center text-gun-powder-950">
              <img src={efficiencySVG} className="w-[8vw]" />
              <p className="font-[600]">Increased Efficiency</p>
              <p>Streamline operations and reduce labor costs.</p>
            </div>
            <div className="flex flex-col  w-[20rem] gap-4 items-center text-gun-powder-950">
              <img src={easySVG} className="w-[8vw]" />
              <p className="font-[600]">Easy to use</p>
              <p>User-friendly system for a smooth ordering experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <h2>Learn more about our key features</h2>
      </div>
    </div>
  );
};

export default Home;
