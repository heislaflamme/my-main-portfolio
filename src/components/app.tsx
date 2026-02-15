import { motion } from "framer-motion";
import type React from "react";



export default function App({className, onClick, drag, dragConstraints, children, style}: { className?: string, onClick?: React.MouseEventHandler, children?: React.ReactNode, style?: React.CSSProperties, drag?: boolean, dragConstraints?: object }) {


  return (
    <>
    <motion.div 
        className={`${className}`}
        style={style} 
        dragConstraints={dragConstraints}
        drag={drag}
        whileTap={{scale: 0.8}}
        transition={{ type: "spring", stiffness: 400, damping: 20}}
        onClick={onClick}>
      {children}
    </motion.div>
    </>
  );
}