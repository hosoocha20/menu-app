import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  useAnimate,
  stagger,
  delay,
  easeInOut,
  easeIn,
} from "framer-motion";
import { easeOut } from "framer-motion/dom";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hideNav, setHideNav] = useState(false);
  const [scope, animate] = useAnimate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() || 0;
    if (latest > 0) {
      animate(
        scope.current,
        { backgroundColor: "#ffffff" },
        { duration: 0.8, ease: easeIn }
      );
    }
    else{
        animate(
            scope.current,
            { duration: 0.8, ease: easeOut }
          );
    }
    if (latest > prev && latest > 150) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  });

  return (
    <motion.nav
      ref={scope}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hideNav ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
      className={` px-[5rem]  font-inter w-full h-[4.5rem] bg-transparent sticky top-0 z-50`}
    >
      <div
        className={` flex justify-between items-center  h-full px-1 rounded-[2rem]`}
      >
        <div className="flex-1  ml-[1rem] font-cabin text-gun-powder-950 text-[1.2rem] font-[500]">
          SmartMenu
        </div>
        <div className="flex-1   flex justify-center gap-[3.2rem] tracking-wider font-[400] text-[0.95rem] text-my-black-950">
          <p className=" px-2">About</p>
          <p className=" px-2">Features</p>
          <p className=" px-2">Contact</p>
        </div>
        <div className="flex-1  flex justify-end gap-[3.2rem] tracking-wider font-[400] text-[0.95rem] text-my-black-950">
          <button className=" ">Login</button>
          <button className="border border-my-black-950 bg-my-black-950 rounded-[2rem] px-5 py-[0.78rem] text-white">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
