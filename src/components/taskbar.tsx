import React, { useState, useRef, useEffect } from "react";
import App from "./app.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { Rnd } from "react-rnd";
import Skills from "./apps/skills.tsx";
import Projects from "./apps/projects.tsx";
import About from "./apps/about.tsx";
import Services from "./apps/services.tsx";

export default function Taskbar({children}: {children: React.ReactNode}) {

    const [now, setNow] = useState(new Date())

    useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(interval)
     }, [])

    const ref = useRef(null);
    const [isApp2Open, setIsApp2Open] = useState(false);
    const [isApp3Open, setIsApp3Open] = useState(false);
    const [isApp4Open, setIsApp4Open] = useState(false);
    const [isApp5Open, setIsApp5Open] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [isApp2Maximized, setIsApp2Maximized] = useState(false);
    const [isApp3Maximized, setIsApp3Maximized] = useState(false);
    const [isApp4Maximized, setIsApp4Maximized] = useState(false);
    const [isApp5Maximized, setIsApp5Maximized] = useState(false);

    const [isApp2Minimized, setIsApp2Minimized] = useState(false);
    const [isApp3Minimized, setIsApp3Minimized] = useState(false);    
    const [isApp4Minimized, setIsApp4Minimized] = useState(false);    
    const [isApp5Minimized, setIsApp5Minimized] = useState(false);    

    const [isApp2Focused, setIsApp2Focused] = useState(false);
    const [isApp3Focused, setIsApp3Focused] = useState(false);
    const [isApp4Focused, setIsApp4Focused] = useState(false);
    const [isApp5Focused, setIsApp5Focused] = useState(false);

    function FocusApp2() {
        setIsApp2Focused(true);
        setIsApp3Focused(false);
        setIsApp4Focused(false);
        setIsApp5Focused(false);
    }

    function FocusApp3() {
        setIsApp3Focused(true);
        setIsApp2Focused(false);
        setIsApp4Focused(false);
        setIsApp5Focused(false);
    }

    function FocusApp4() {
        setIsApp4Focused(true);
        setIsApp2Focused(false);
        setIsApp3Focused(false);
        setIsApp5Focused(false);
    }

    function FocusApp5() {
        setIsApp5Focused(true);
        setIsApp3Focused(false);
        setIsApp4Focused(false);
        setIsApp2Focused(false);
    }

    function CloseAll() {
        setIsApp5Focused(false);
        setIsApp3Focused(false);
        setIsApp4Focused(false);
        setIsApp2Focused(false);
    }

    
    const [app2ZIndex, setApp2ZIndex] = useState(1);
    const [app3ZIndex, setApp3ZIndex] = useState(1);
    const [app4ZIndex, setApp4ZIndex] = useState(1);
    const [app5ZIndex, setApp5ZIndex] = useState(1);
    const [searchZIndex, setSearchZIndex] = useState(1);

    const getMaxZIndex = () => Math.max(app2ZIndex, app3ZIndex, app4ZIndex, app5ZIndex, searchZIndex);

  return (
    <>
      <div
        ref={ref}
        className="desktop-bg fixed inset-0"
        onMouseDown={(e) => {
          e.stopPropagation();
          CloseAll();
          setIsSearchOpen(false);
          setIsApp2Open(false);
          setIsApp3Open(false);
          setIsApp4Open(false);
          setIsApp5Open(false);
          setIsApp2Minimized(
            isApp2Open ? true : isApp2Minimized ? true : false,
          );
          setIsApp3Minimized(
            isApp3Open ? true : isApp3Minimized ? true : false,
          );
          setIsApp4Minimized(
            isApp4Open ? true : isApp4Minimized ? true : false,
          );
          setIsApp5Minimized(
            isApp5Open ? true : isApp5Minimized ? true : false,
          );
        }}
      >
        {children}
      </div>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            key="search"
            initial={{ scale: 0, y: 500 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 500 }}
            transition={{ duration: 0.35 }}
            style={{ zIndex: searchZIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              setSearchZIndex(getMaxZIndex() + 1);
            }}
            className="w-[40%] fixed bottom-14 left-1/2 rounded shadow-2xl -translate-x-1/2 h-[85%] windows-white-bg"
          >
            <p className="text-center w-full h-full relative top-1/2">Under Construction lmao...⚙️👷</p>
          </motion.div>
        )}

        {isApp2Open && (
          <Rnd
            key="app2"
            bounds="window"
            disableDragging={isApp2Maximized}
            minHeight="300px"
            minWidth="300px"
            default={{
              x: (window.innerWidth - 800) / 2,
              y: (window.innerHeight - 400) / 2,
              width: 800,
              height: 400,
            }}
            dragHandleClassName="titlebar2"
            position={
              isApp2Maximized
                ? {
                    x: 0,
                    y: 0,
                  }
                : undefined
            }
            size={
              isApp2Maximized
                ? {
                    width: window.innerWidth,
                    height: window.innerHeight - 52,
                  }
                : undefined
            }
            style={{ zIndex: app2ZIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              setApp2ZIndex(getMaxZIndex() + 1);
              FocusApp2();
              setIsSearchOpen(false);
            }}
          >
            <motion.div
              layout
              initial={{ scale: 0, y: 500 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 500 }}
              transition={{ duration: 0.35 }}
              className=" windows-white-bg shadow-2xl overflow-hidden flex flex-col rounded w-full h-full"
            >
              <div className="relative flex gap-4 w-full border-b border-b-black/20 rounded-t flex-row-reverse p-2 titlebar2 cursor-grab active:cursor-grabbing">
                <div className="absolute w-full flex gap-2 pl-3">
                  <img loading="lazy" src="/images/file_explorer.png" alt="skills" width={25} height={25} />
                  <p>Skills</p>
                </div>
                <button
                  className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp2Open(false);
                    setIsApp2Maximized(false);
                    setIsApp2Minimized(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/exit.svg"
                    alt="exit button"
                    width={16}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp2Maximized(!isApp2Maximized);
                  }}
                >
                  <img loading="lazy"
                    src="/images/maximize.svg"
                    alt="maximize button"
                    width={13}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp2Minimized(isApp2Open ? true : false);
                    setIsApp2Open(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/minimize.svg"
                    alt="minimize button"
                    width={20}
                    height={10}
                    className="invert-0"
                  />
                </button>
              </div>
              <div className="overflow-auto p-3">
                <Skills/>
              </div>
            </motion.div>
          </Rnd>
        )}

        {isApp3Open && (
          <Rnd
            key="app3"
            bounds="window"
            disableDragging={isApp3Maximized}
            minHeight="300px"
            minWidth="300px"
            default={{
              x: (window.innerWidth - 900) / 2,
              y: (window.innerHeight - 500) / 2,
              width: 800,
              height: 400,
            }}
            dragHandleClassName="titlebar2"
            position={
              isApp3Maximized
                ? {
                    x: 0,
                    y: 0,
                  }
                : undefined
            }
            size={
              isApp3Maximized
                ? {
                    width: window.innerWidth,
                    height: window.innerHeight - 52,
                  }
                : undefined
            }
            style={{ zIndex: app3ZIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              setApp3ZIndex(getMaxZIndex() + 1);
              FocusApp3();
              setIsSearchOpen(false);
            }}
          >
            <motion.div
              layout
              initial={{ scale: 0, y: 500 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 500 }}
              transition={{ duration: 0.35 }}
              className=" windows-white-bg shadow-2xl flex flex-col overflow-hidden rounded w-full h-full"
            >
              <div className="relative flex gap-4 w-full border-b border-b-black/20 rounded-t flex-row-reverse p-2 titlebar2 cursor-grab active:cursor-grabbing">
                <div className="absolute w-full flex gap-2 pl-3">
                  <img loading="lazy" src="/images/acknowledgment.png" alt="Projects" width={25} height={25} />
                  <p>Projects</p>
                </div>
                <button
                  className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp3Open(false);
                    setIsApp3Maximized(false);
                    setIsApp3Minimized(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/exit.svg"
                    alt="exit button"
                    width={16}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp3Maximized(!isApp3Maximized);
                  }}
                >
                  <img loading="lazy"
                    src="/images/maximize.svg"
                    alt="maximize button"
                    width={13}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp3Open(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/minimize.svg"
                    alt="minimize button"
                    width={20}
                    height={10}
                    className="invert-0"
                  />
                </button>
              </div>
              <div className="relative overflow-y-auto p-4 h-full">
                <Projects/>
              </div>
            </motion.div>
          </Rnd>
        )}

        {isApp4Open && (
          <Rnd
            key="app4"
            bounds="window"
            disableDragging={isApp4Maximized}
            minHeight="300px"
            minWidth="300px"
            default={{
              x: (window.innerWidth - 700) / 2,
              y: (window.innerHeight - 300) / 2,
              width: 800,
              height: 400,
            }}
            dragHandleClassName="titlebar2"
            position={
              isApp4Maximized
                ? {
                    x: 0,
                    y: 0,
                  }
                : undefined
            }
            size={
              isApp4Maximized
                ? {
                    width: window.innerWidth,
                    height: window.innerHeight - 52,
                  }
                : undefined
            }
            style={{ zIndex: app4ZIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              setApp4ZIndex(getMaxZIndex() + 1);
              FocusApp4();
              setIsSearchOpen(false);
            }}
          >
            <motion.div
              layout
              initial={{ scale: 0, y: 500 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 500 }}
              transition={{ duration: 0.35 }}
              className=" windows-white-bg flex flex-col overflow-hidden shadow-2xl rounded w-full h-full"
            >
              <div className="relative flex gap-4 w-full border-b border-b-black/20 rounded-t flex-row-reverse p-2 titlebar2 cursor-grab active:cursor-grabbing">
                <div className="absolute w-full flex gap-2 pl-3">
                  <img loading="lazy" src="/images/msword.png" alt="about me" width={40} height={40} />
                  <p>About me</p>
                </div>
                <button
                  className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp4Open(false);
                    setIsApp4Maximized(false);
                    setIsApp4Minimized(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/exit.svg"
                    alt="exit button"
                    width={16}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp4Maximized(!isApp4Maximized);
                  }}
                >
                  <img loading="lazy"
                    src="/images/maximize.svg"
                    alt="maximize button"
                    width={13}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp4Minimized(isApp4Open ? true : false);
                    setIsApp4Open(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/minimize.svg"
                    alt="minimize button"
                    width={20}
                    height={10}
                    className="invert-0"
                  />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <About/>
              </div>
            </motion.div>
          </Rnd>
        )}

        {isApp5Open && (
          <Rnd
            key="app5"
            bounds="window"
            disableDragging={isApp5Maximized}
            minHeight="300px"
            minWidth="300px"
            default={{
              x: (window.innerWidth - 750) / 2,
              y: (window.innerHeight - 400) / 2,
              width: 800,
              height: 400,
            }}
            dragHandleClassName="titlebar2"
            position={
              isApp5Maximized
                ? {
                    x: 0,
                    y: 0,
                  }
                : undefined
            }
            size={
              isApp5Maximized
                ? {
                    width: window.innerWidth,
                    height: window.innerHeight - 52,
                  }
                : undefined
            }
            style={{ zIndex: app5ZIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              setApp5ZIndex(getMaxZIndex() + 1);
              FocusApp5();
              setIsSearchOpen(false);
            }}
          >
            <motion.div
              layout
              initial={{ scale: 0, y: 500 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0, y: 500 }}
              transition={{ duration: 0.35 }}
              className=" windows-white-bg flex flex-col shadow-2xl rounded w-full h-full"
            >
              <div className="relative flex gap-4 w-full border-b border-b-black/20 rounded-t flex-row-reverse p-2 titlebar2 cursor-grab active:cursor-grabbing">
                <div className="absolute w-full flex gap-2 pl-3">
                  <img loading="lazy" src="/images/comments.png" alt="services" width={20} height={20} />
                  <p>Services</p>
                </div>
                <button
                  className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp5Open(false);
                    setIsApp5Maximized(false);
                    setIsApp5Minimized(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/exit.svg"
                    alt="exit button"
                    width={16}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp5Maximized(!isApp5Maximized);
                  }}
                >
                  <img loading="lazy"
                    src="/images/maximize.svg"
                    alt="maximize button"
                    width={13}
                    height={10}
                    className="invert-0"
                  />
                </button>
                <button
                  className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsApp5Minimized(isApp5Open ? true : false);
                    setIsApp5Open(false);
                    CloseAll();
                  }}
                >
                  <img loading="lazy"
                    src="/images/minimize.svg"
                    alt="minimize button"
                    width={20}
                    height={10}
                    className="invert-0"
                  />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                  <Services/>
              </div>
            </motion.div>
          </Rnd>
        )}
      </AnimatePresence>

      <div className="windows-white-bg fixed bottom-0 h-13 gap-5 items-center w-full flex justify-center z-50">
        <a href="/">
          <App className="h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white">
            <img loading="eager"
              src="/images/Windows.png"
              alt="Windows Icon"
              width={30}
              height={30}
            />
          </App>
        </a>

        <App
          className="flex justify-center items-center rounded-2xl cursor-pointer h-7.5 w-25"
          style={{
            backgroundColor: isSearchOpen
              ? "rgba(54, 129, 214)"
              : "rgba(0,0,0,0.3)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsSearchOpen(!isSearchOpen);
            if (!isSearchOpen) setSearchZIndex(getMaxZIndex() + 1); 
          }}
        >
          <img loading="eager"
            src="/images/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <p className="text-white text-[13px] px-2">Search</p>
        </App>

        <App
          className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white"
          style={{
            backgroundColor: isApp2Focused ? "rgba(255, 255, 255, 0.644)" : " ",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsApp2Open(!isApp2Open);
            if (isApp2Open) {
              setIsApp2Focused(false);
            }
            setIsApp2Minimized(true);
            setIsSearchOpen(false);
            if (!isApp2Open) {
              setApp2ZIndex(getMaxZIndex() + 1);
              FocusApp2();
            } 
          }}
        >
          <img loading="eager"
            src="/images/file_explorer.png"
            alt="about me"
            width={30}
            height={30}
          />
          {isApp2Minimized && (
            <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
          )}
        </App>

        <App
          className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white"
          style={{
            backgroundColor: isApp3Focused ? "rgba(255, 255, 255, 0.644)" : " ",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsApp3Open(!isApp3Open);
            if (isApp3Open) {
              setIsApp3Focused(false);
            }
            setIsApp3Minimized(true);
            setIsSearchOpen(false);
            if (!isApp3Open) {
              setApp3ZIndex(getMaxZIndex() + 1);
              FocusApp3();
            } 
          }}
        >
          <img loading="eager"
            src="/images/acknowledgment.png"
            alt="projects"
            width={30}
            height={30}
            className="pb-px"
          />
          {isApp3Minimized && (
            <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
          )}
        </App>

        <App
          className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white"
          style={{
            backgroundColor: isApp4Focused ? "rgba(255, 255, 255, 0.644)" : " ",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsApp4Open(!isApp4Open);
            if (isApp4Open) {
              setIsApp4Focused(false);
            }
            setIsApp4Minimized(true);
            setIsSearchOpen(false);
            if (!isApp4Open) {
              setApp4ZIndex(getMaxZIndex() + 1);
              FocusApp4();
            } 
          }}
        >
          <img loading="eager"
            src="/images/msword.png"
            alt="about me"
            width={60}
            height={60}
          />

          {isApp4Minimized && (
            <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
          )}
        </App>

        <App
          className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white"
          style={{
            backgroundColor: isApp5Focused ? "rgba(255, 255, 255, 0.644)" : " ",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsApp5Open(!isApp5Open);
            if (isApp5Open) {
              setIsApp5Focused(false);
            }
            setIsApp5Minimized(true);
            setIsSearchOpen(false);
            if (!isApp5Open) {
              setApp5ZIndex(getMaxZIndex() + 1);
              FocusApp5();
            } 
          }}
        >
          <img loading="eager"
            src="/images/comments.png"
            alt="my services"
            width={30}
            height={30}
            className="pb-1"
          />

          {isApp5Minimized && (
            <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
          )}
        </App>

        <div className="absolute right-0 flex gap-3">
          <div className="flex py-3 gap-2">
            <img loading="eager"
            src="/images/wifi.svg"
            alt="wifi"
            width={20}
            height={20}
            className="invert"
          />
          <img loading="eager"
            src="/images/speaker.svg"
            alt="speaker"
            width={20}
            height={20}
            className="invert"
          />
          <img loading="eager"
            src="/images/battery.svg"
            alt="battery"
            width={20}
            height={20}
            className="invert"
          />
          </div>

          <div className="mr-3">
            <p className="text-black text-center text-[13px]">
              {now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <p className="text-[13px]">
              {now.toLocaleDateString("en-NG", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}