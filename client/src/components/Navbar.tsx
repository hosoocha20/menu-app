import React, { useEffect, useState } from 'react'
import {motion, useScroll, useMotionValueEvent, useInView, useAnimate, stagger, delay, easeInOut} from "framer-motion"

interface NavBarProps{
    position: string
}

const Navbar = (props: NavBarProps) => {
    const { scrollY } =useScroll();
    const [animateNav, setAnimateNav] = useState(false);
    const [scope, animate] = useAnimate();

    const navWrapper = document.getElementById("navWrapper") || "";
    async function myAnimationEnter() {
        await animate(navWrapper, { opacity: 1 }, { duration: 0.35, ease: easeInOut });
      }
      async function myAnimationExit() {
        await animate(navWrapper, { opacity: 0 }, { duration: 0.35, ease: easeInOut});
      }

    useMotionValueEvent(scrollY,"change", (latest) => {
        console.log(latest)
        if (latest !== 0 && props.position === "sticky"){
            setAnimateNav(true)
            
        }

        else if (latest < 800 && props.position === "sticky"){
            setAnimateNav(false)
            
        }
            
    })
    useEffect(() =>{
        animateNav ? myAnimationEnter() : myAnimationExit()
    },[animateNav])
  return (
    <nav 
    ref={scope}
    className={`${props.position === "static" ? "mt-[-4.5rem]": ""} px-[5rem] pt-3 font-inter w-full h-[4.5rem] bg-transparent ${props.position} top-0 z-50`}>
        <div id="navWrapper" className={`${props.position === "static" ? "bg-transparent border-transparent ": "bg-white navbar-box-shadow opacity-0"} border flex justify-between items-center  h-full px-1 rounded-[2rem]`}>
            <div className='flex-1  ml-[1rem] font-cabin text-gun-powder-950 text-[1.2rem] font-[500]'>
                MenuNow
            </div>
            <div className='flex-1   flex justify-center gap-[3.2rem] tracking-wider font-[400] text-[0.95rem] text-my-black-950'>
                <p className=' px-2'>About</p>
                <p className=' px-2'>Features</p>
                <p className=' px-2'>Contact</p>
            </div>
            <div className='flex-1  flex justify-end gap-[3.2rem] tracking-wider font-[400] text-[0.95rem] text-my-black-950'>
                <button className=' '>Login</button>
                <button className='border border-my-black-950 bg-my-black-950 rounded-[2rem] px-5 py-[0.78rem] text-white'>Get Started</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar