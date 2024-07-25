import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element;
    className? : string;
    amount?: number;
}
const RevealAni = (props: Props) => {
    const ref = useRef(null);
    // const isInView = useInView(ref,{amount: props.amount});
    // const mainControls = useAnimation();

    // useEffect(() =>{
    //     if (isInView){
    //         mainControls.start("visible")
    //     }
    // },[isInView])
  return (
    <div ref={ref} className={`relative overflow-hidden ${props.className}`}>
        <motion.div
        variants={{hidden: {opacity: 0, y: 75}, visible : {opacity: 1, y: 0}}}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.4, once: true}}
        exit="visible"
        transition={{duration: 0.6, delay: 0.25}}
        >{props.children}</motion.div>
    </div>
  )
}

export default RevealAni