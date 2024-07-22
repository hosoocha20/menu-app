import React, { Component, useEffect, useRef, useState } from "react";
import orderSVG from "../assets/order.svg";
import tabletSVG from "../assets/tablet.svg";
import timeSVG from "../assets/time.svg";
import efficiencySVG from "../assets/efficiency.svg";
import easySVG from "../assets/easy.svg";
import mealSVG from "../assets/family-meal-29.svg";
import smartMeal from "../assets/family-meal-1.svg";
import smartDevice from "../assets/smartDevice2.svg";
import startSVG from "../assets/start1.svg";
import qrSVG from "../assets/qr-code-64.svg";
import qrCodePNG from "../assets/qr-code-128.png";
import qrIconSVG from "../assets/qr-icon2.svg";
import { IoMdCellular } from "react-icons/io";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFull } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";
import { HiBellAlert } from "react-icons/hi2";
import { VscQuestion } from "react-icons/vsc";
import { MdHomeFilled } from "react-icons/md";
import { TbClipboardText } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";
import { PiDevicesLight } from "react-icons/pi";
import { PiNotebookLight } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";

//SVG Components
import {
  Adminf,
  Brushf,
  Controlf,
  Customizef,
  Kioskf,
  Menuf,
  Posf,
  Qrf,
} from "../ui/FeaturesIcon";

import {
  motion,
  useAnimationControls,
  useInView,
  AnimatePresence,
} from "framer-motion";
import ViewmoreUI from "../ui/ViewMoreUI";
import LinkUI from "../ui/LinkUI";

interface OfferI {
  svg: string;
  heading: string;
}
const Home = () => {
  //animation variables
  const controls = useAnimationControls();
  const qrAniRef = useRef(null);
  const qrAniIsInView = useInView(qrAniRef, { once: true });

  const foodMenuKioskImgArr = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg",
  ];
  const foodMenuPhoneArr = [
    "food1.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg",
    "food3.jpg",
  ];
  const offerArr: OfferI[] = [
    { svg: "qrf", heading: "Digitally Avaliable" },
    { svg: "kioskf", heading: "Kiosk Software" },
    { svg: "menuf", heading: "Change your Menu at Anytime" },
    { svg: "brushf", heading: "Design your Menu" },
    { svg: "customizef", heading: "Customize Features" },
    { svg: "controlf", heading: "Manage your Orders" },
    { svg: "posf", heading: "Self PoS" },
    { svg: "adminf", heading: "Employee PoS" },
  ];
  const components = [
    Qrf,
    Kioskf,
    Menuf,
    Brushf,
    Customizef,
    Controlf,
    Posf,
    Adminf,
  ];
  //Functions
  const createComponent = (i: number) => {
    const Component = components[i];
    if (!Component) return <></>;

    return <Component key={i} />;
  };

  //Animation Functions
  const qrAnimationSequence = async () => {
    await controls.start("startQr");
    return await controls.start("fadeOutQr");
  };
  useEffect(() => {
    console.log("Element is in view: ", qrAniIsInView);
    if (qrAniIsInView) qrAnimationSequence();
  }, [controls, qrAniIsInView]);
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
      <div className=" py-[2rem] px-[8rem] w-full flex justify-center items-center ">
        <div className="flex gap-[8rem]  w-[80%]  ">
          <img src={smartMeal} className="w-[45%]" />
          <div className="flex flex-col gap-[1.5rem] pt-[8rem]">
            <h2 className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em]">
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
              With SmartMenu, customers can effortlessly browse menus, customize
              orders, and complete payments without the need for waitstaff
              intervention.
            </p>
            <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3 mt-[3.2rem] text-white">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <div className=" py-[2rem]  px-[8rem] w-full flex justify-center items-center ">
        <div className="flex gap-[8rem]  w-[80%] ">
          <div className="flex flex-col gap-[1.5rem] pt-[8rem]">
            <h2 className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em]">
              Why SmartMenu
            </h2>
            <p className="text-[2rem] text-gun-powder-950 font-[600]">
              Smart and Eco-friendly
            </p>
            <p>
              Reduce costs, boost efficiency, and embrace sustainability – all
              with SmartMenu. Our innovative digital menu system eliminates the
              need for printing and laminating, saving you money and minimizing
              environmental impact.
            </p>
            <p>
              Say goodbye to outdated menus and hello to a more responsible and
              efficient way to manage your restaurant.
            </p>
            <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3 mt-[3.2rem] text-white">
              Get Started Now
            </button>
          </div>
          <img src={smartDevice} className="w-[40%]" />
        </div>
      </div>
      <ViewmoreUI
        tag="About us"
        body="Learn more about what we do"
        bgColor="bg-[#ffffff]"
      />
      <hr className="border w-[70%] mx-auto my-0 border-[#f3f3f3]"></hr>
      <div className="pt-[6rem]  ">
        <div className="pb-[4rem]">
          <h2 className="font-cabin  text-center uppercase font-medium text-my-mango-600 text-[0.92rem] tracking-[0.3em] py-[1rem]">
            {" "}
            Our Solution
          </h2>
          <p className="text-center">We offer two convenient ways to order:</p>
        </div>
        <div className="h-[600px] px-[8rem] ">
          <div className="solution-bg-img h-full rounded-[2rem] pt-[3rem] px-[3rem]  relative flex justify-center">
            {/* <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
                Our Solution
              </h2>
              <p className="text-center">We offer two convenient ways to order:</p> */}
            <div className="absolute top-[-60px]  h-full overflow-hidden  left-[5vw]">
              <div className="h-full w-max overflow-hidden  rounded  px-[2rem] ">
                <div className="w-[300px] h-[550px]  rounded-[2rem] p-[0.5rem] pl-[0.7rem] bg-[#1f1f1f] iphone-rim">
                  <motion.div
                    animate={controls}
                    variants={{
                      fadeOutQr: {
                        background: [
                          "linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%)",
                          "#2f2f2f",
                          "#222222",
                          "#151515",
                        ],
                      },
                    }}
                    transition={{ duration: 1, ease: "linear" }}
                    className=" flex flex-col items-center gap-[1rem]  w-full h-full rounded-[1.5rem] iphone  bg-gun-powder-600 overflow-hidden "
                  >
                    <div className="iphone-screen-top">
                      <p className="text-sm font-[500]">7.53</p>
                      <div className="flex gap-1">
                        <IoMdCellular />
                        <IoIosWifi />
                        <IoBatteryFull />
                      </div>
                    </div>
                    {/* Before Animation */}
                    <motion.div
                      animate={controls}
                      variants={{
                        fadeOutQr: { opacity: 0 },
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="z-1 opacity-1"
                    >
                      <p className="text-white font-cabin font-[500] mt-[8rem] text-center">
                        Scan QR Code
                      </p>
                      <div className=" w-fit p-4 relative  mt-[1rem]">
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "-5px", "5px"],
                              y: [0, "-5px", "5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute top-0 left-0 w-[15px] h-[15px] border-t-4 border-l-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "-5px", "5px"],
                              y: [0, "5px", "-5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute bottom-0 left-0 w-[15px] h-[15px] border-b-4 border-l-4 border-white"
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "5px", "-5px"],
                              y: [0, "-5px", "5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute top-0 right-0 w-[15px] h-[15px] border-t-4 border-r-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "5px", "-5px"],
                              y: [0, "5px", "-5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute bottom-0 right-0 w-[15px] h-[15px] border-b-4 border-r-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              opacity: [0, 0.5, 1, 1, 1],
                              bottom: [0, "25%", "50%", "75%", "100%"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{
                            ease: "linear",
                            duration: 0.7,
                            delay: 0.8,
                          }}
                          className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 rounded-full bg-[#00a36c]"
                        ></motion.div>
                        <img src={qrCodePNG} className="w-[100px]" />
                      </div>
                    </motion.div>
                    {/* After Animation */}
                    <motion.div
                      animate={controls}
                      variants={{ fadeOutQr: { visibility: "visible" } }}
                      transition={{ duration: 0.7 }}
                      className="absolute top-0 left-0 mt-[1.5rem] w-full h-full flex flex-col invisible"
                    >
                      <div className="text-center bg-[#151515] text-[0.75rem] py-2 text-white">
                        SmartMenu
                      </div>
                      <div className="flex-1 flex flex-col gap-[1rem] px-3 pt-4 bg-my-black-50 ">
                        <h2 className="text-my-mango-600 font-[600]">Menu</h2>
                        <div className="flex text-[0.75rem] gap-2">
                          <div className="px-4 py-1 rounded-2xl bg-my-mango-500 text-white border border-my-mango-600 font-[600] ">
                            Main
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Sides
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Lunch
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Drinks
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 px-1">
                          {foodMenuPhoneArr.map((imgSrc: string) => (
                            <div className="bg-white rounded-lg font-[600] text-my-black-950 p-2 border text-center">
                              <img src={`/${imgSrc}`} />
                              <p className="text-[0.75rem]">Pizza</p>
                              <p className="text-[0.7rem]">$20.00</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      animate={controls}
                      variants={{ fadeOutQr: { visibility: "visible" } }}
                      transition={{ duration: 0.7 }}
                      className="absolute bottom-0 left-0 flex border-t text-[1.3rem] w-full bg-white py-2 px-12 justify-between invisible"
                    >
                      <div>
                        <MdHomeFilled className="text-my-mango-500" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0"></div>
                      </div>
                      <div>
                        <TbClipboardText className="text-my-black-400" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0 invisible"></div>
                      </div>
                      <div>
                        <PiShoppingCartBold className="text-my-black-400" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0 invisible"></div>
                      </div>
                    </motion.div>
                    {/* To Here */}
                    <i className="iphone-speaker">Speaker</i>
                    <b className="iphone-camera">Camera</b>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className=" w-[600px] h-max ml-[10vw] mt-[5vh] flex flex-col gap-[1rem]">
              <p className="text-my-black-300">01</p>
              <h3 className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950">
                QR Code
              </h3>
              <p>
                Scan the QR code at your table to access our mobile-optimized
                ordering platform using a device.
              </p>
              <p>
                Allow your customers to use their own device to scan the QR code
                to connect to the digitlized menu designated to the specific
                table.
              </p>
              <div ref={qrAniRef} className=" w-max mt-[2.5rem]">
                <LinkUI name="Learn More" />
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
        <div className="h-[600px] px-[8rem] mt-[4rem] ">
          <div className="solution-bg-img h-full rounded-[2rem] pt-[3rem] px-[3rem]">
            {/* <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
                Our Solution
              </h2>
              <p className="text-center">We offer two convenient ways to order:</p> */}
            <div className=" h-full  relative">
              <div className="absolute top-[-200px] right-[5vw]  w-max overflow-hidden  rounded  px-[2rem] flex flex-col items-center">
                <div className=" w-[500px] h-[320px]  rounded-[1.2rem] p-[0.6rem] pr-[0.8rem] bg-[#1f1f1f] kiosk-rim">
                  <div className="flex flex-col w-full h-full rounded-[0.7rem] tablet-kiosk bg-gun-powder-600 overflow-hidden">
                    <div className="py-[8px] bg-[#151515] text-[0.35rem] text-white text-center">
                      SmartMenu
                    </div>
                    <div className="flex w-full h-full">
                      <div className="w-[22%] border-r flex flex-col justify-between text-[0.5rem] bg-my-black-50">
                        <div>
                          <div className="p-[7px] border-b bg-my-black-800 text-white">
                            Mains
                          </div>
                          <div className="p-[7px] border-b">
                            Salad and Sides
                          </div>
                          <div className="p-[7px] border-b">Lunch Set</div>
                          <div className="p-[7px] border-b">Drinks</div>
                          <div className="p-[7px] border-b">Desserts</div>
                        </div>
                        <div>
                          <div className="p-[7px] border-t border-b">
                            Your Orders
                          </div>
                          <div className="p-[7px]  flex justify-between items-center">
                            <HiBellAlert />
                            <VscQuestion />
                          </div>
                        </div>
                      </div>
                      <div className="w-[55%] h-full bg-my-black-100">
                        <div className=" h-max  grid grid-cols-5 gap-1 p-1 ">
                          {foodMenuKioskImgArr.map((imgSrc: string) => (
                            <div className="p-1 rounded-md bg-white">
                              <img src={`/${imgSrc}`} />
                              <p className="text-[0.4rem] text-center mt-[1px]">
                                Pizza
                              </p>
                              <p className="text-[0.35rem] text-center">
                                $20.00
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-[23%]  bg-my-black-50 flex flex-col justify-between">
                        <div className="text-[0.5rem] py-[5px] px-1">
                          Your Order Cart
                        </div>
                        <div>
                          <div className="text-[0.45rem] font-[600] py-[5px] px-1 flex justify-between">
                            <span>Total</span>
                            <span>$0.00</span>
                          </div>
                          <div className="text-[0.5rem] text-white text-center w-full bg-my-orange-400 border py-[7px]">
                            Place Order
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[150px] h-[100px] bg-[#1f1f1f] mt-[1rem] rounded-[1.5rem] kiosk-stand"></div>
              </div>
              <div className=" w-[600px] h-max ml-[10vw] mt-[5vh] flex flex-col gap-[1rem]">
                <p className="text-my-black-300">02</p>
                <h3 className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950">
                  Kiosk
                </h3>
                <p>
                  Enjoy the ease of ordering directly from a device placed at
                  each table.
                </p>
                <p>
                  Allow your customers to order directly from their table with a
                  tap.
                </p>
                <div className=" w-max mt-[2.5rem]">
                  <LinkUI name="Learn More" />
                </div>
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
      </div>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col  w-max py-[3rem] gap-[3rem]">
          <h2 className="text-[2.9rem] text-gun-powder-950 w-[50vw]  leading-tight  ">
            Enhance your customer experience while boosting efficiency with our
            digitalized table ordering solution.
          </h2>
          <div className="flex  justify-center gap-[1rem] text-gun-powder-950 w-max">
            <div className="flex flex-col w-[22rem] h-[24rem]   bg-[url('assets/mesh-gradientOR.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow">
              <img src={timeSVG} className="w-[6rem]  " />
              <p className="font-[600] text-[1.1rem] mt-[10vh]">
                Reduce wait times
              </p>
              <p className="text-[0.875rem] mt-[0.5rem]">
                Our service allows customers to order directly from their table
                leading to faster service and happier customers.
              </p>
            </div>
            <div className="flex flex-col w-[22rem] h-[24rem]   bg-[url('assets/mesh-gradientM.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow">
              <img src={efficiencySVG} className="w-[6rem]" />
              <p className="font-[600] text-[1.1rem] mt-[10vh]">
                Increased efficiency
              </p>
              <p className="text-[0.875rem] mt-[0.5rem]">
                Streamline operations and reduce labor costs.
              </p>
            </div>
            <div className="flex flex-col w-[22rem] h-[24rem]]   bg-[url('assets/mesh-gradientPU.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow">
              <img src={easySVG} className="w-[6rem]" />
              <p className="font-[600] text-[1.1rem] mt-[10vh]">Easy to use</p>
              <p className="text-[0.875rem] mt-[0.5rem]">
                User-friendly system for a smooth ordering experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-screen flex flex-col bg-my-black-10">
        <div className="py-[5rem] text-center w-full flex flex-col gap-[1rem]">
          <h2 className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em] ">
            Our Features
          </h2>
          <p className=" text-[1.7rem] text-my-black-950  font-light ">
            What we Offer
          </p>
        </div>
        <div className="grid grid-cols-4 px-[10vw] flex-1 gap-3">
          {offerArr.map((item: OfferI, i: number) => (
            <div className="rounded-2xl relative group flex flex-col items-center pt-[30%] gap-[2rem] hover:bg-my-black-950  cursor-pointer transition-[background-color] duration-300 ease-out ">
              <div className="group-hover:fill-white fill-my-black-950 w-[3.5rem] translate-y-0 group-hover:translate-y-[-0.2rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75 ">
                {createComponent(i)}
              </div>
              {/* <div className="group-hover:text-white text-my-black-950"><IoMdCellular /></div> */}
              {/* <div className="group-hover:text-white text-my-black-950 group-hover:fill-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-512q-44.55 0-75.27-30.72Q374-573.45 374-618.33q0-44.89 30.73-75.28Q435.45-724 480-724t75.27 30.39Q586-663.22 586-618.33q0 44.88-30.73 75.61Q524.55-512 480-512ZM212-258v-22.67q0-22.66 13.83-41.83 13.84-19.17 36.84-30.17Q319-378 373.15-391q54.14-13 106.83-13t106.85 13q54.17 13 110.15 38.6 23.46 10.8 37.24 29.94Q748-303.33 748-280.67V-258q0 10.83-7.58 18.42Q732.83-232 722-232H238q-10.83 0-18.42-7.58Q212-247.17 212-258Zm24 2h488v-24.67q0-14.66-10.17-28.16-10.16-13.5-28.5-23.17-50-24.33-101.35-36.17Q532.63-380 480-380t-104.31 11.83Q324-356.33 274.67-332q-18.34 9.67-28.5 23.17Q236-295.33 236-280.67V-256Zm244-280q34.33 0 58.17-23.83Q562-583.67 562-618t-23.83-58.17Q514.33-700 480-700t-58.17 23.83Q398-652.33 398-618t23.83 58.17Q445.67-536 480-536Zm0-82Zm0 362Z"/></svg>
              </div> */}

              <h4 className="px-4 text-[1.1rem] text-my-black-950 group-hover:text-transparent tracking-wider translate-y-0 group-hover:translate-y-[-0.3rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75">
                {item.heading}
              </h4>
              <p className="absolute w-full text-center px-[25%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[0.3rem] text-transparent tracking-wide group-hover:text-white group-hover:translate-y-[0] transition duration-300 ease-in-out delay-75">
                Your customers can access the menu on their own device at any
                time, without any app install.
              </p>
            </div>
          ))}
        </div>
      </div>
      <ViewmoreUI
        tag="Enhance your service"
        body="Learn more about our features"
        bgColor="bg-[#f9f9f9]"
      />

      <div className=" px-[5rem] py-[3rem] flex justify-center items-center gap-[5rem]">
        <img src={startSVG} className="w-[35%]" />
        <div className="flex flex-col w-[500px] gap-[1.5rem]">
          <h2 className="font-cabin uppercase font-medium text-my-black-900 text-[0.92rem] tracking-[0.3em] ">
            How it works
          </h2>
          <div className="grid grid-cols-[auto_1fr] text-[1.8rem] gap-x-[2rem] gap-y-[1rem] bg-transparent items-center relative">
            <div className="absolute top-0 left-6 w-[2px] h-full bg-[linear-gradient(rgba(255,255,255,0),#ffc466_25%,rgba(252,151,117,1)_45%,#ffc466_85%,rgba(255,255,255,0))] z-[-1]"></div>
            <div className=" mt-1 rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full   rounded-full p-2 text-white">
              <PiDevicesLight />
              </div>
            </div>
            <div className="text-[0.9rem] py-[1rem]">
              <h5 className="text-[0.97rem] font-medium text-my-black-950 py-2">Create your Account</h5>
              <p>Get started with SmartMenu in seconds with our free and easy signup process.</p>
            </div>
            <div className="  rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full bg-white  rounded-full p-2 text-my-mango-600">
                <PiNotebookLight />
              </div>
            </div>
            <div className="text-[0.9rem] pb-[1rem]">
              <h5 className="text-[0.97rem] font-medium text-my-black-950 py-2">Build Your Digital Menu</h5>
              <p> Choose from our designed templates or create your own. Add menu items, photos and details.</p>
            </div>
            <div className="  rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full bg-white  rounded-full p-2 text-my-mango-500">
              <MdFoodBank />
              </div>
            </div>
            <div className="text-[0.9rem] pb-[1rem]">
              <h5 className="text-[0.97rem] font-medium text-my-black-950 py-2">Transform Your Restaurant</h5>
              <p>Customize your QR code and publish your digital menu to your restaurant's SmartMenu Platform.</p>
              <p className="mt-1">Use your QR code on your tables, windows and others so customers can easily scan the QR code to view your menu.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full py-[6rem] px-[5rem] mx-auto my-0  bg-my-black-10 bg-[url('./assets/mesh-bg-3.svg')] bg-no-repeat bg-cover bg-center rounded-xl flex flex-col items-center gap-[2rem]">
        <p className="text-[2rem] font-cabin ">SmartMenu, <span className="font-inter">Your Smart Choice for a Modern Restaurant</span></p>
        <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3  text-white">
              Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Home;
