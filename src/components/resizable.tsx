import { Rnd } from "react-rnd"
import { motion } from "framer-motion"

export default function ResizableComponent({children}: {children: React.ReactNode}) {

    return(
       <>
       <Rnd 
       default={{
        x: 500,
        y: 500,
        width: 100,
        height: 100
       }}
       className="bg-red-500 absolute"
       >
        <motion.div
        className="bg-white w-full h-full"
        >
            {children}
        </motion.div>
       </Rnd>
       </>
    )
}
