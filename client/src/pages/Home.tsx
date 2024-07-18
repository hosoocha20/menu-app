import React, { useEffect, useRef } from "react";
import orderSVG from "../assets/order.svg";
import tabletSVG from "../assets/tablet.svg";
import timeSVG from "../assets/time.svg";
import efficiencySVG from "../assets/efficiency.svg";
import easySVG from "../assets/easy.svg";
import mealSVG from "../assets/family-meal-29.svg";
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
import {
  motion,
  useAnimationControls,
  useInView,
  AnimatePresence,
} from "framer-motion";
const Home = () => {
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
      <div className="py-[4rem]">
        <div className="pb-[4rem]">
          <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
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
                  <motion.div animate={controls} variants={{fadeOutQr: {background: ["linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%)","#2f2f2f","#222222","#151515"]}}} transition={ {duration: 1, ease: "linear"}} className=" flex flex-col items-center gap-[1rem]  w-full h-full rounded-[1.5rem] iphone  bg-gun-powder-600 overflow-hidden ">
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
                        fadeOutQr: { opacity: 0 }
                      }}
                      transition={{ duration: 1 , ease: "easeOut"}}
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
              <h3 className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950">
                I. QR Code
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
              <button
                ref={qrAniRef}
                className="bg-my-mango-500 rounded-[1.5rem] w-max py-3 px-6 text-white text-[0.9rem] mt-[2.5rem]"
              >
                Learn more
              </button>
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
                <h3 className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950">
                  II. Kiosk
                </h3>
                <p>
                  Enjoy the ease of ordering directly from a device placed at
                  each table.
                </p>
                <p>
                  Allow your customers to order directly from their table with a
                  tap.
                </p>
                <button className="bg-my-mango-500 rounded-[1.5rem] w-max py-3 px-6 text-white text-[0.9rem] mt-[2.5rem]">
                  Learn more
                </button>
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
      <div className="h-[100vh] flex flex-col justify-center">
        <div className="flex flex-col justify-center  py-[3rem] ">
          <h2 className="text-[2.9rem] text-gun-powder-950 w-[50vw] mx-auto my-0 leading-tight pb-[3rem]">
            Enhance your customer experience while boosting efficiency with our
            digitalized table ordering solution.
          </h2>
          <div className="flex   justify-center gap-[2rem] text-gun-powder-950">
            <div className="flex flex-col w-[20rem] h-[28rem]   bg-[url('assets/mesh-gradientOR.png')] bg-cover bg-center px-5 py-5 border rounded-2xl my-bg-shadow">
                <p className="font-[600]">Reduce wait times</p>
              <img src={timeSVG} className="w-[7vw]  mt-[4rem] ml-2 " />
              <p className="px-2">
                Our service allows customers to order directly
                from their table leading to faster service and happier
                customers.
              </p>
            </div>
            <div className="flex flex-col w-[20rem] h-[28rem]   bg-[url('assets/mesh-gradientM.png')] bg-cover bg-center px-5 py-5 border rounded-2xl my-bg-shadow">
                <p className="font-[600]">Increased Efficiency</p>
              <img src={efficiencySVG} className="w-[7vw]  mt-[4rem] ml-2" />
              
              <p className="px-2">Streamline operations and reduce labor costs.</p>
            </div>
            <div className="flex flex-col w-[20rem] h-[28rem]   bg-[url('assets/mesh-gradientPU.png')] bg-cover bg-center px-5 py-5 border rounded-2xl my-bg-shadow">
                <p className="font-[600]">Easy to use</p>
              <img src={easySVG} className="w-[7vw]  mt-[4rem] ml-2" />
              
              <p className="px-2">User-friendly system for a smooth ordering experience.</p>
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
