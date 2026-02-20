import App from "./app";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";
import Skills from "./apps/skills";
import Projects from "./apps/projects";
import About from "./apps/about";
import Services from "./apps/services";

export default function Mobile() {
  const [isApp1Open, setIsApp1Open] = useState(false);
  const [isApp2Open, setIsApp2Open] = useState(false);
  const [isApp3Open, setIsApp3Open] = useState(false);
  const [isApp4Open, setIsApp4Open] = useState(false);

  const ref = useRef(null);

  const [now, setNow] = useState(new Date());

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const split = new SplitText(".mobile-hero-text", { type: "words,chars" });
    const chars = split.chars as HTMLElement[];
    const words = split.words as HTMLElement[];

    gsap.set(words, {
      paddingRight: 5,
    });

    const handlers: {
      char: HTMLElement;
      enter: () => void;
      leave: () => void;
    }[] = [];

    chars.forEach((char) => {
      char.style.willChange = "transform";

      const enter = () =>
        gsap.to(char, {
          scale: 1.2,
          y: -20,
          ease: "power2.out",
          duration: 0.3,
        });
      const leave = () =>
        gsap.to(char, { scale: 1, y: 0, ease: "power2.out", duration: 0.3 });

      char.addEventListener("mouseenter", enter);
      char.addEventListener("mouseleave", leave);

      handlers.push({ char, enter, leave });
    });

    gsap.from(chars, {
      onStart: () => setIsReady(true),
      opacity: 0.01,
      x: 200,
      rotateZ: -60,
      stagger: 0.05,
      ease: "power2.out",
      duration: 1,
    });

    gsap.from(chars, {
      keyframes: [{ y: 0 }, { y: -20 }, { y: 0 }],
      repeat: -1,
      stagger: 0.1,
      ease: "power2.inOut",
      duration: 2,
      delay: 4,
      repeatDelay: 4,
    });

    return () => {
      split.revert();
      handlers.forEach(({ char, enter, leave }) => {
        char.style.willChange = "auto";
        char.removeEventListener("mouseenter", enter);
        char.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <img src="/images/mobile-bg.webp" alt="background" loading="eager" className="mobile-bg" />
        <AnimatePresence>
          {(isApp1Open || isApp2Open || isApp3Open || isApp4Open) && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0.01 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.01 }}
              transition={{ duration: 0.2 }}
              className="absolute flex justify-center items-center w-full h-full cursor-pointer modal z-10"
              onMouseDown={() => {
                setIsApp1Open(false);
                setIsApp2Open(false);
                setIsApp3Open(false);
                setIsApp4Open(false);
              }}
              key="modal"
            ></motion.div>
          )}
          {isApp1Open && (
            <motion.div
              drag
              key="app1"
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100 || info.offset.y > 100 || info.offset.x < -50 || info.offset.x > 50) {
                  setIsApp1Open(false);
                }
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ scale: 0, y: 100, opacity: 0 }}
              className="w-[90%] h-[85%] pt-4 px-4 pb-[10%] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 windows-app-bg rounded-xl flex flex-col"
            >
              <div>
                <img loading="lazy" src="/images/files.png" alt="skills" width={30} height={30} className="absolute top-[-6%] rounded-full" />
              </div>
              <div className="overflow-y-auto">
                <h1 className={`text-center max-[360px]:text-[15px] min-[700px]:text-2xl`}>MY TECH STACK</h1>
              <Skills/>
              </div>
            </motion.div>
          )}

          {isApp2Open && (
            <motion.div
              drag
              key="app2"
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100 || info.offset.y > 100 || info.offset.x < -50 || info.offset.x > 50) {
                  setIsApp2Open(false);
                }
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ scale: 0, y: 100, opacity: 0 }}
              className="w-[90%] h-[85%] flex flex-col px-4 pt-4 pb-[10%] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 windows-app-bg rounded-xl"
            >
              <div>
                <img loading="lazy" src="/images/gallery.png" alt="projects" width={30} height={30} className="absolute top-[-6%] rounded-full" />
              </div>
              
              <div className="overflow-y-auto">
                <h1 className="text-center max-[360px]:text-[15px] min-[700px]:text-2xl">MY WORKS</h1>
              <Projects/>
              </div>

            </motion.div>
          )}

          {isApp3Open && (
            <motion.div
              drag
              key="app3"
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100 || info.offset.y > 100 || info.offset.x < -50 || info.offset.x > 50) {
                  setIsApp3Open(false);
                }
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ scale: 0, y: 100, opacity: 0 }}
              className="w-[90%] h-[85%] px-4 pt-4 pb-[10%] flex flex-col absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 windows-app-bg rounded-xl"
            >
              <div>
                <img loading="lazy" src="/images/android_word.png" alt="about me" width={30} height={30} className="absolute top-[-6%] rounded-full" />
              </div>
              
              <div className="overflow-y-auto">
                <h1 className="text-center max-[360px]:text-[15px] m-4 min-[700px]:text-2xl">ABOUT ME</h1>
                <About/>
              </div>
            </motion.div>
          )}

          {isApp4Open && (
            <motion.div
              drag
              key="app4"
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100 || info.offset.y > 100 || info.offset.x < -50 || info.offset.x > 50) {
                  setIsApp4Open(false);
                }
              }}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ scale: 0, y: 100, opacity: 0 }}
              className="w-[90%] h-[85%] flex flex-col px-4 pt-4 pb-[10%] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 windows-app-bg rounded-xl"
            >
              <div>
                <img loading="lazy" src="/images/messages.png" alt="services" width={30} height={30} className="absolute top-[-6%] rounded-full" />
              </div>

              <div className="overflow-y-auto">
                <h1 className="text-center max-[360px]:text-[15px] m-4 min-[700px]:text-2xl">My Services</h1>
                <Services/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative w-full p-2">
          <div className="absolute flex gap-1 right-0 mr-5">
            <img loading="eager"
              src="/images/wifi.svg"
              alt="wifi"
              width={15}
              height={15}
              className=""
            />
            <img loading="eager"
              src="/images/cellular-data.svg"
              alt="cellular"
              width={15}
              height={15}
              className=""
            />
            <img loading="eager"
              src="/images/battery.svg"
              alt="battery"
              width={15}
              height={15}
              className="rotate-270"
            />
          </div>

          <div className="absolute left-0 ml-5 ">
            <p className="text-white">
              {now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </p>
          </div>

          <div className="absolute w-5 h-5 rounded-full bg-black left-1/2 -translate-x-1/2">
            <div className="w-2 h-2 bg-gray-700 rounded-full left-1/2 relative -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="hero-header h-[55%] p-2 flex flex-col absolute w-full gap-5 justify-center">
          <header
            className={`mobile-hero-text text-center text-[11vw] text-white pointer-events-auto ${isReady ? "opacity-100" : "opacity-1"}`}
          >
            HEY I'M CHIDUBEM
          </header>
          <motion.p
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-p text-[6vw]  hover:scale-[1.05] transition-all duration-200 text-center text-white"
          >
            A full-stack web developer ⚡
          </motion.p>
          <motion.p
            initial={{ opacity: 0.01 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hero-p text-[6vw]  hover:scale-[1.05] transition-all duration-200 text-center text-white"
          >
            I turn your ideas into modern, production ready SEO-optimized web
            applications. 🚀
          </motion.p>
        </div>

        <div className="absolute flex flex-col h-[40%] gap-[5%] mb-5 bottom-0 w-full">
          <div className="flex justify-around p-2 gap-2">
            <App className="w-20 h-20 hover:scale-[1.05] transition-all duration-200">
              <a
                href="mailto:emekaogbuchidubem@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.2 }} src="/images/gmail.svg" alt="mail" />
              </a>
            </App>

            <App className="w-20 h-20 hover:scale-[1.05] transition-all duration-200">
              <a
                href="https://www.linkedin.com/in/emekaogbuchidubem/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.1 }} src="/images/linkedin.svg" alt="linkedin" />
              </a>
            </App>

            <App className="w-20 h-20 hover:scale-[1.05] transition-all duration-200">
              <a
                href="https://x.com/heislaflame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1}}
                  src="/images/x.svg"
                  alt="twitter/x"
                  className="rounded-2xl"
                />
              </a>
            </App>

            <App className="w-20 h-20 hover:scale-[1.05] transition-all duration-200">
              <a
                href="https://t.me/heislaflame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.1 }} src="/images/telegram.svg" alt="telegram" />
              </a>
            </App>

            <App className="w-20 h-20 hover:scale-[1.05] transition-all duration-200">
              <a
                href="/docs/resume.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.2 }} src="/images/word.png" alt="resume" />
              </a>
            </App>
          </div>

          <div className="flex justify-around mb-10 p-2 gap-2">
            <App drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}}
              className="w-20 h-20 cursor-pointer"
              onClick={() => {
                setIsApp1Open(true);
              }}
            >
              <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.1 }}
                src="/images/files.png"
                alt="skills"
                className="rounded-4xl"
              />
            </App>

            <App drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}}
              className="w-20 h-20 cursor-pointer"
              onClick={() => {
                setIsApp2Open(true);
              }}
            >
              <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0 }} src="/images/gallery.png" alt="projects" />
            </App>

            <App drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}}
              className="w-20 h-20 cursor-pointer"
              onClick={() => {
                setIsApp3Open(true);
              }}
            >
              <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0 }}
                src="/images/android_word.png"
                alt="about me"
              />
            </App>

            <App drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0}}
              className="w-20 h-20 cursor-pointer"
              onClick={() => {
                setIsApp4Open(true);
              }}
            >
              <motion.img loading="eager" initial={{y: 500}} width={80} height={80} animate={{y: 0}} transition={{ duration: 1, delay: 0.1 }} src="/images/messages.png" alt="services" />
            </App>
          </div>
        </div>
      </div>
    </>
  );
}
