import React from "react";
import orderSVG from "../assets/order.svg";
import tabletSVG from "../assets/tablet.svg";
import timeSVG from "../assets/time.svg";
import efficiencySVG from "../assets/efficiency.svg";
import easySVG from "../assets/easy.svg";

const Home = () => {
  return (
    <div className="h-[200vh] font-inter mt-[-4.5rem]">
      <div className="h-[100vh] w-full bg-my-orange-10 flex flex-col items-center gap-[2rem] pt-[5rem]">
        <h1 className="text-[3rem] text-gun-powder-950 text-center mt-[4.5rem]">
          Boost Efficiency, Delight Customers, Enhance Your{" "}
          <span className="block">Service with MenuNow</span>
        </h1>
        <p className="text-center">
          Empower customers, optimize operations, maximize profits. MenuNow -
          The premier self-ordering solution.
        </p>
        <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[9rem] py-3 text-white">
          Get Started
        </button>
        <img src={orderSVG} className="w-[40%]" />
      </div>
      <div className="py-[3rem]">
        <h2 className="text-center text-[2.9rem] text-gun-powder-950 w-[50vw] mx-auto my-0 leading-tight pb-[3rem]">
          Enhance your customer experience while boosting efficiency with our
          digitalized table ordering solution.
        </h2>
        <div className="flex text-center  justify-center gap-[6rem]">
          <div className="flex flex-col w-[20rem] gap-4 items-center text-gun-powder-950">
            <img src={timeSVG} className="w-[10vw]" />
            <p className="font-[600]">Reduce wait times</p>
            <p>
              Our digital menu solution allows customers to order directly from
              their table leading to faster service and happier customers.
            </p>
          </div>
          <div className="flex flex-col w-[20rem] gap-4 items-center text-gun-powder-950">
            <img src={efficiencySVG} className="w-[10vw]" />
            <p className="font-[600]">Increased Efficiency</p>
            <p>Streamline operations and reduce labor costs.</p>
          </div>
          <div className="flex flex-col  w-[20rem] gap-4 items-center text-gun-powder-950">
            <img src={easySVG} className="w-[10vw]" />
            <p className="font-[600]">Easy to use</p>
            <p>User-friendly system for a smooth ordering experience.</p>
          </div>
        </div>
      </div>
      <div className=" py-[2rem] px-[3rem]">
        <div className="border rounded-3xl py-[3rem] px-[5rem]">
          <h2>MenuNow</h2>
          <p>
            Its a user-friendly self-service ordering solution designed to
            revolutionize the dining experience for both customers and
            restaurants.
          </p>
          <p>Our system offers two convenient ways to order:</p>
          <ul className="list-disc list-inside">
            <li>
              Dedicated Tabletop Kiosk: Enjoy the ease of ordering directly from
              a sleek, interactive device placed at each table.
            </li>
            <li>
              QR Code Convenience: Scan the QR code at your table to access our
              mobile-optimized ordering platform using your own device.
            </li>
          </ul>
          <p>
            With MenuNow Kiosk, customers can effortlessly browse menus,
            customize orders, and complete payments without the need for
            waitstaff intervention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
