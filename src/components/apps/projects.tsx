import { motion } from "framer-motion"


export default function Projects(){

    return(
        <>
            <div className="flex justify-center">
                    <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5}} viewport={{ once: true }} className="text-center mt-5"> <strong className="pr-2">N.B:</strong>All client projects are shown with their permission.</motion.p>
                </div>

                <div className="rounded-2xl mt-4 flex flex-col justify-center gap-10 w-full overflow-x-hidden">

                <motion.div initial={{x: -100}} whileInView={{x:0}} transition={{ duration: 0.5 }} className="bg-black/10 w-75 relative left-1/2 -translate-x-1/2 flex flex-col justify-center rounded-2xl">
                    <div className="p-4 flex flex-col justify-center gap-5">
                        <a href="http://chidubem.name.ng" target="_blank" rel="noopener noreferrer">
                        <motion.img src="/images/Screenshot1.png" whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} alt="project1" width={250} className=" m-auto rounded-xl hover:shadow-2xl" />
                        </a>
                        <a href="http://chidubem.name.ng" target="_blank" rel="noopener noreferrer" className="text-center hover:text-blue-500">Basic Portfolio Site</a>
                        <div className="flex justify-center gap-5">
                            <img src="/images/html.svg" alt="html" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/css.svg" alt="css" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/tailwind.svg" alt="html" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/typescript.svg" alt="typescript" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/astro.ico" alt="astro" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                        </div>
                        <p className="text-center  hover:scale-[1.05] transition-all duration-200">A basic portfolio site made with vanilla typescript, html, css and tailwind on the Astro framework</p>
                    </div>
                </motion.div>

                <motion.div initial={{x: -100}} whileInView={{x:0}} transition={{ duration: 0.5, delay: 0.1}} className="bg-black/10 w-75 relative left-1/2 -translate-x-1/2 rounded-2xl">
                         <div className="p-4 flex flex-col justify-center gap-5">
                        <a href="http://codnyglobal.com" target="_blank" rel="noopener noreferrer">
                        <motion.img src="/images/Screenshot2.png" whileTap={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} alt="project2" width={250} className=" m-auto rounded-xl hover:shadow-2xl" />
                        </a>
                        <a href="http://codnyglobal.com" target="_blank" rel="noopener noreferrer" className="text-center hover:text-blue-500">Company Website</a>
                        <div className="flex justify-center gap-5">
                            <img src="/images/react.svg" alt="react" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/tanstack.svg" alt="tanstack" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer invert"/>
                            <img src="/images/typescript.svg" alt="typescript" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/sanity.png" alt="sanity" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                            <img src="/images/framer.png" alt="framer" width={40} height={20} className="hover:scale-[1.1] transition-all duration-200 cursor-pointer" />
                        </div>
                        <p className="text-center hover:scale-[1.05] transition-all duration-200">A fullstack company site made using Tanstack start react framework as other tanstack libraries such as form and query, Sanity CMS that served as a simple backend to update products. </p>
                    </div>
                        
                </motion.div>
                 
                 
                </div>
     
                  </>
    )
}