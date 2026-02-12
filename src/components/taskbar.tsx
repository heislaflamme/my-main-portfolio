import React, { useState, useRef } from "react";
import App from "./app.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { Rnd } from "react-rnd";

export default function Taskbar({children}: {children: React.ReactNode}) {
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
        <div ref={ref} className="bg fixed inset-0"
        onMouseDown={() => {
            CloseAll();
            setIsSearchOpen(false);
            setIsApp2Open(false);
            setIsApp3Open(false);
            setIsApp4Open(false);
            setIsApp5Open(false);
            setIsApp2Minimized(isApp2Open ? true : isApp2Minimized ? true : false);
            setIsApp3Minimized(isApp3Open ? true : isApp3Minimized ? true : false);
            setIsApp4Minimized(isApp4Open ? true : isApp4Minimized ? true : false);
            setIsApp5Minimized(isApp5Open ? true : isApp5Minimized ? true : false);
        }}
        >
            {children}
        </div>
        <AnimatePresence>

        {
            isSearchOpen && 
            <motion.div 
                key="search" 
                initial={{scale: 0, y: 500}} 
                animate={{scale: 1, y: 0}} 
                exit={{scale: 0, y: 500}} 
                transition={{duration: 0.2}}
                style={{zIndex: searchZIndex}}
                onMouseDown={() => setSearchZIndex(getMaxZIndex() + 1)}
                className="w-[40%] fixed bottom-13 left-1/2 rounded shadow-2xl -translate-x-1/2 h-[85%] windows-white-bg"
            >
                search
            </motion.div>
        }

        {
            isApp2Open && 
            <Rnd
              dragHandleClassName="titlebar2"
            >
                <motion.div 
                layout
                key="app2" 
                initial={{scale: 0, y: 500}} 
                animate={{scale: 1, y: 0}} 
                exit={{scale: 0, y: 500}} 
                transition={{duration: 0.2}}
                style={{zIndex: app2ZIndex, width: isApp2Maximized ? "100%" : "70%", height: isApp2Maximized ? "93%" : "70%", bottom: isApp2Maximized ? "7%" : "52px"}}
                onMouseDown={() => {
                    setApp2ZIndex(getMaxZIndex() + 1);
                    FocusApp2();
                    setIsSearchOpen(false);
                }}
                className=" shadow-2xl absolute left-1/2 -translate-x-1/2 rounded windows-app-bg active:cursor-grabbing"
            >
                <div className="fixed top-0 flex gap-4 w-full bg-black/90 cursor-grab active:cursor-grabbing rounded-t flex-row-reverse p-2 titlebar2">
                <button className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp2Open(false);
                    setIsApp2Maximized(false);
                    setIsApp2Minimized(false);
                    CloseAll();
                    }}>
                <img src="/images/exit.svg" alt="exit button" width={16} height={10} className="invert" />

                    </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => setIsApp2Maximized(!isApp2Maximized)}>
                <img src="/images/maximize.svg" alt="maximize button" width={13} height={10} className="invert hover:invert-0" />

                </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp2Minimized(isApp2Open ? true : false);
                    setIsApp2Open(false);
                    CloseAll();
                }}>
                <img src="/images/minimize.svg" alt="minimize button" width={20} height={10} className="invert hover:invert-0" />

                </button>
                </div>

                2
            </motion.div>
            </Rnd>
        }

        {
            isApp3Open && 
            <Rnd
              dragHandleClassName="titlebar3"
            >
                <motion.div 
                layout
                key="app3" 
                initial={{scale: 0, y: 500}} 
                animate={{scale: 1, y: 0}} 
                exit={{scale: 0, y: 500}} 
                transition={{duration: 0.2}}
                style={{zIndex: app3ZIndex, width: isApp3Maximized ? "100%" : "70%", height: isApp3Maximized ? "93%" : "70%", bottom: isApp3Maximized ? "7%" : "80px", left: isApp3Maximized ? "50%" : "60%"}}
                onMouseDown={() => {
                    setApp3ZIndex(getMaxZIndex() + 1);
                    FocusApp3();
                    setIsSearchOpen(false);
                }}
                className="shadow-2xl absolute -translate-x-1/2 rounded windows-app-bg active:cursor-grabbing"
            >
                <div className="fixed top-0 flex gap-4 w-full bg-black/90 cursor-grab active:cursor-grabbing rounded-t flex-row-reverse p-2 titlebar3">
                <button className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp3Open(false);
                    setIsApp3Maximized(false);
                    setIsApp3Minimized(false);
                    CloseAll();
                    }}>
                <img src="/images/exit.svg" alt="exit button" width={16} height={10} className="invert" />

                    </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => setIsApp3Maximized(!isApp3Maximized)}>
                <img src="/images/maximize.svg" alt="maximize button" width={13} height={10} className="invert hover:invert-0" />

                </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp3Minimized(isApp3Open ? true : false);
                    setIsApp3Open(false);
                    CloseAll();
                }}>
                <img src="/images/minimize.svg" alt="minimize button" width={20} height={10} className="invert hover:invert-0" />

                </button>
                </div>
                3
            </motion.div>
            </Rnd>
        }

        {
            isApp4Open && 
            <Rnd
              dragHandleClassName="titlebar4"
            >
                <motion.div 
                layout
                key="app4" 
                initial={{scale: 0, y: 500}} 
                animate={{scale: 1, y: 0}} 
                exit={{scale: 0, y: 500}} 
                transition={{duration: 0.2}}
                style={{zIndex: app4ZIndex, width: isApp4Maximized ? "100%" : "70%", height: isApp4Maximized ? "93%" : "70%", bottom: isApp4Maximized ? "7%" : "80px", left: isApp4Maximized ? "50%" : "40%"}}
                onMouseDown={() => {
                    setApp4ZIndex(getMaxZIndex() + 1);
                    FocusApp4();
                    setIsSearchOpen(false);
                }}
                className=" shadow-2xl absolute -translate-x-1/2 rounded windows-app-bg active:cursor-grabbing"
            >
                <div className="fixed top-0 flex gap-4 w-full bg-black/90 cursor-grab active:cursor-grabbing rounded-t flex-row-reverse p-2 titlebar4">
                <button className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp4Open(false);
                    setIsApp4Maximized(false);
                    setIsApp4Minimized(false);
                    CloseAll();
                    }}>
                <img src="/images/exit.svg" alt="exit button" width={16} height={10} className="invert" />

                    </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => setIsApp4Maximized(!isApp4Maximized)}>
                <img src="/images/maximize.svg" alt="maximize button" width={13} height={10} className="invert hover:invert-0" />

                </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp4Minimized(isApp4Open ? true : false);
                    setIsApp4Open(false);
                    CloseAll();
                }}>
                <img src="/images/minimize.svg" alt="minimize button" width={20} height={10} className="invert hover:invert-0" />

                </button>
                </div>
                4
            </motion.div>
            </Rnd>
        }

        {
            isApp5Open && 
            <Rnd
              dragHandleClassName="titlebar5"
            >
                <motion.div 
                layout
                key="app5" 
                initial={{scale: 0, y: 500}} 
                animate={{scale: 1, y: 0}} 
                exit={{scale: 0, y: 500}} 
                transition={{duration: 0.2}}
                style={{zIndex: app5ZIndex, width: isApp5Maximized ? "100%" : "70%", height: isApp5Maximized ? "93%" : "70%", bottom: isApp5Maximized ? "7%" : "68px", left: isApp5Maximized ? "50%" : "45%"}}
                onMouseDown={() => {
                    setApp5ZIndex(getMaxZIndex() + 1);
                    FocusApp5();
                    setIsSearchOpen(false);
                }}
                className="shadow-2xl absolute -translate-x-1/2 rounded windows-app-bg active:cursor-grabbing"
            >
                <div className="fixed top-0 flex gap-4 w-full bg-black/90 cursor-grab active:cursor-grabbing rounded-t flex-row-reverse p-2 titlebar5">
                <button className=" hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp5Open(false);
                    setIsApp5Maximized(false);
                    setIsApp5Minimized(false);
                    CloseAll();
                    }}>
                <img src="/images/exit.svg" alt="exit button" width={16} height={10} className="invert" />

                    </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => setIsApp5Maximized(!isApp5Maximized)}>
                <img src="/images/maximize.svg" alt="maximize button" width={13} height={10} className="invert hover:invert-0" />

                </button>
                <button className="hover-white rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100" onClick={() => {
                    setIsApp5Minimized(isApp5Open ? true : false);
                    setIsApp5Open(false);
                    CloseAll();
                }}>
                <img src="/images/minimize.svg" alt="minimize button" width={20} height={10} className="invert hover:invert-0" />

                </button>
                </div>
                5
            </motion.div>
            </Rnd>
        }

        </AnimatePresence>

      <div className="windows-white-bg fixed bottom-0 h-[7%] gap-5 items-center w-full flex justify-center z-50">
        <a href="/">
        <App className="h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white">
            <img src="/images/Windows.png" alt="Windows Icon" width={30} height={30} />
        </App>
        </a>

        <App className="flex justify-center items-center rounded-2xl cursor-pointer h-7.5 w-25" style={{ backgroundColor: isSearchOpen ? "rgba(54, 129, 214)" : "rgba(0,0,0,0.3)"}} onClick={() => {
            setIsSearchOpen(!isSearchOpen);  // Toggle
            if (!isSearchOpen) setSearchZIndex(getMaxZIndex() + 1);  // Bring to front only when opening
        }}>
            <img src="/images/search.svg" alt="Search Icon" width={20} height={20} />
            <p className="text-white text-[13px] px-2">Search</p>
        </App>

        <App className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white" 
            style={{ backgroundColor: isApp2Focused ? "rgba(255, 255, 255, 0.644)" : " "}}
            onClick={() => {
            setIsApp2Open(!isApp2Open); 
            if(isApp2Open){
                setIsApp2Focused(false);
            }
            setIsApp2Minimized(true); // Toggle
            setIsSearchOpen(false); 
            if (!isApp2Open) {
                setApp2ZIndex(getMaxZIndex() + 1);
                FocusApp2();
            };  // Bring to front only when opening
        }}>
        
            <img src="/images/file_explorer.png" alt="File Explorer Icon" width={30} height={30} />
            {
                isApp2Minimized
                &&
                <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
            }
    
        </App>

        <App className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white" 
            style={{ backgroundColor: isApp3Focused ? "rgba(255, 255, 255, 0.644)" : " "}}
            onClick={() => {
            setIsApp3Open(!isApp3Open);
            if(isApp3Open){
                setIsApp3Focused(false);
            }
            setIsApp3Minimized(true);  // Toggle
            setIsSearchOpen(false); 
            if (!isApp3Open) {
                setApp3ZIndex(getMaxZIndex() + 1);
                FocusApp3();
            };  // Bring to front only when opening
        }}>
            <img src="/images/acknowledgment.png" alt="Acknowledgment Icon" width={30} height={30} className="pb-px"/>
            {
                isApp3Minimized
                &&
                <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
            }
        </App>

        <App className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white" 
            style={{ backgroundColor: isApp4Focused ? "rgba(255, 255, 255, 0.644)" : " "}}
            onClick={() => {
            setIsApp4Open(!isApp4Open);
            if(isApp4Open){
                setIsApp4Focused(false);
            }
            setIsApp4Minimized(true);  // Toggle
            setIsSearchOpen(false); 
            if (!isApp4Open) {
                setApp4ZIndex(getMaxZIndex() + 1);
                FocusApp4();
            };  // Bring to front only when opening
        }}>
            <img src="/images/msword.png" alt="MS Word Icon" width={60} height={60} />

            {
                isApp4Minimized
                &&
                <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
            }
        </App>

        <App className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white" 
            style={{ backgroundColor: isApp5Focused ? "rgba(255, 255, 255, 0.644)" : " "}}
            onClick={() => {
            setIsApp5Open(!isApp5Open); 
            if(isApp5Open){
                setIsApp5Focused(false);
            }
            setIsApp5Minimized(true); // Toggle
            setIsSearchOpen(false); 
            if (!isApp5Open) {
                setApp5ZIndex(getMaxZIndex() + 1);
                FocusApp5();
            };  // Bring to front only when opening
        }}>

            <img src="/images/comments.png" alt="Comments Icon" width={30} height={30} className="pb-2" />


            {
                isApp5Minimized
                &&
                <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0"></div>
            }
        </App>
      </div>
    </>
  );
}