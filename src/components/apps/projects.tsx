import { motion } from "framer-motion"


export default function Projects(){

    return(
        <>
            <div className="flex justify-center">
                    <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5}} viewport={{ once: true }} className="text-center mt-5"> <strong className="pr-2">N.B:</strong>All client projects are shown with their permission.</motion.p>
                </div>

                <div className="rounded-2xl w-full overflow-x-hidden">

                  <motion.div initial={{x: -100}} whileInView={{x:0}} transition={{ duration: 0.5 }} className="bg-black/10 w-full py-1 flex gap-2 h-30 my-4 rounded-2xl">
                    
                    <a href="http://dubememeka.vercel.app" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2">
                    <motion.img src="/images/Screenshot1.png" whileTap={{ scale: 1.1, x: "7%" }} whileHover={{ scale: 1.1, x: "7%"}} alt="project1" width={200} className=" rounded-xl hover:shadow-2xl relative top-1/2 -translate-y-1/2" />
                    </a>
                     
                    <div className="w-[60%] flex rounded-2xl gap-2 flex-col justify-center">
                        <a href="https://dubememeka.vercel.app" className="hover:text-blue-500 w-fit max-[350px]:text-[10px]">Basic Portfolio</a>
                        <div className="flex gap-2 flex-wrap overflow-auto p-2 rounded">
                            <img src="/images/html.svg" alt="html" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/css.svg" alt="css" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/typescript.svg" alt="typescript" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/astro.ico" alt="astro" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{x: -100}} whileInView={{x:0}} transition={{ duration: 0.5, delay: 0.1}} className="bg-black/10 w-full py-1 flex h-30 my-4 rounded-2xl">

                         <a href="http://codnyglobal.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2">
                        <motion.img src="/images/Screenshot2.png" whileTap={{ scale: 1.1, x: "7%" }} whileHover={{ scale: 1.1, x: "7%"}} alt="project2" width={200} className=" rounded-xl hover:shadow-2xl relative top-1/2 -translate-y-1/2" />
                         </a>

                        <div className="w-[60%] flex rounded-2xl gap-2 flex-col justify-center">
                        <a href="https://codnyglobal.com" className="hover:text-blue-500 w-fit max-[350px]:text-[10px]">Company Website</a>
                        <div className="flex gap-2 flex-wrap overflow-auto p-2 rounded">
                            <img src="/images/react.svg" alt="react" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/tanstack.svg" alt="tanstack" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer invert"/>
                            <img src="/images/typescript.svg" alt="typescript" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/sanity.png" alt="sanity" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/framer.png" alt="framer" width={20} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                        </div>
                    </div>
                </motion.div>
                 
                 
                </div>
     
                
        </>
    )
}