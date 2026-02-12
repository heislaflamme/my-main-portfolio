import { motion } from "framer-motion";
import type React from "react";



export default function App({className, onClick, children, style}: { className?: string, onClick?: React.MouseEventHandler, children?: React.ReactNode, style?: React.CSSProperties }) {


  return (
    <>
    <motion.div 
        className={`${className}`}
        style={style} 
        whileTap={{scale: 0.9}}
        transition={{ type: "spring", stiffness: 400, damping: 20}}
        onClick={onClick}>
      {children}
    </motion.div>
    </>
  );
}