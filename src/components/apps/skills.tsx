import { motion } from "framer-motion";

export default function Skills({color}: {color?: string}) {
  

    return(
        <>
                <div className="flex justify-center">
                  <motion.p initial={{opacity: 0.01}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{ duration: 1}} className={`mt-2 mb-2 text-${color}`}>This website was made using <strong>Astro</strong> to ensure <strong>fast load times</strong>, <strong>better SEO</strong> and <strong>improved website performance</strong>. <br /> <strong>Gsap</strong> and <strong>Framer Motion</strong> where used along side <strong>React</strong> islands to create the beautiful user Interface and user experience you are witnessing. <br /> I make use of modern frameworks, libraries and tools to achieve excellent results. <br /> I am confident in my tech stack and I use it well. <br /> <br />Here is my tech stack:</motion.p>
                </div>

                <div className=" border border-black/10 skills rounded-2xl p-4 mb-2">

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}} className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/html.svg" alt="html" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>HTML</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/css.svg" alt="css" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>CSS</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/tailwind.svg" alt="tailwind" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>Tailwind</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/sass.svg" alt="Sass" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>SaSS</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/js.svg" alt="JavaScript" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>JavaScript</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/typescript.svg" alt="typescript" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>TypeScript</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <motion.img whileTap={{ scale: 0.95 }} whileInView={{ rotateZ: [0, 400, 360]}} transition={{ duration: 2, repeat: Infinity}} src="/images/react.svg" alt="react" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>React</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/nextjs.svg" alt="next" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>NextJS</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/astro.ico" alt="astro" loading="lazy" width={30} height={30}/>
                    <p className={`text-center text-${color}`}>Astro</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/tanstack.svg" alt="tanstack" loading="lazy" width={30} height={30} className="invert"/>
                    <p className={`text-center text-${color}`}>Tanstack Start, query, form...</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}} className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/zustand-react.png" alt="Zustand" loading="lazy" width={30} height={30}/>
                    <p className={`text-center text-${color}`}>Zustand</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/rtl.png" alt="rtl" loading="lazy" width={30} height={30}/>
                    <p className={`text-center text-${color}`}>React Testing Library</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/vitest-testing.webp" alt="vitest" loading="lazy" width={40} height={40} className="rounded"/>
                    <p className={`text-center text-${color}`}>Vitest</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/framer.png" alt="framer" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>Framer Motion</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/gsap.svg" alt="gsap" loading="lazy" width={50} height={50} className="rounded"/>
                    <p className={`text-center text-${color}`}>GSAP</p>
                  </motion.div>


                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/sanity.png" alt="sanity" loading="lazy" width={50} height={50}className="rounded"/>
                    <p className={`text-center text-${color}`}>Sanity CMS</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/postgres.webp" alt="postgres" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>Postgres</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/supabase.svg" alt="supabase" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>Supabase</p>
                  </motion.div>

                  <motion.div initial={{x:100}} whileInView={{x:0}} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05}} transition={{ duration: 0.3}}  className="flex flex-col gap-2 bg-black/10 rounded-xl justify-center items-center">
                    <img src="/images/vercel.svg" alt="vercel" loading="lazy" width={30} height={30} />
                    <p className={`text-center text-${color}`}>Vercel</p>
                  </motion.div>
                </div>
     
        </>
    )
}