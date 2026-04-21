import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import App from "./app.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { Rnd } from "react-rnd";
import Skills from "./apps/skills.tsx";
import Projects from "./apps/projects.tsx";
import About from "./apps/about.tsx";
import Services from "./apps/services.tsx";

// ── App & link configuration ──────────────────────────────────────────
interface AppConfig {
  id: string;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  component: React.ReactNode;
  defaultWidth: number;
  defaultHeight: number;
}

const APP_CONFIGS: AppConfig[] = [
  {
    id: "skills",
    title: "Skills",
    icon: "/images/file_explorer.png",
    iconWidth: 30,
    iconHeight: 30,
    component: <Skills />,
    defaultWidth: 800,
    defaultHeight: 400,
  },
  {
    id: "projects",
    title: "Projects",
    icon: "/images/acknowledgment.png",
    iconWidth: 30,
    iconHeight: 30,
    component: <Projects />,
    defaultWidth: 800,
    defaultHeight: 400,
  },
  {
    id: "about",
    title: "About me",
    icon: "/images/msword.png",
    iconWidth: 40,
    iconHeight: 40,
    component: <About />,
    defaultWidth: 800,
    defaultHeight: 400,
  },
  {
    id: "services",
    title: "Services",
    icon: "/images/comments.png",
    iconWidth: 20,
    iconHeight: 20,
    component: <Services />,
    defaultWidth: 800,
    defaultHeight: 400,
  },
];

interface QuickLink {
  label: string;
  icon: string;
  href: string;
}

const QUICK_LINKS: QuickLink[] = [
  {
    label: "Email",
    icon: "/images/gmail.svg",
    href: "mailto:emekaogbuchidubem@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: "/images/linkedin.svg",
    href: "https://www.linkedin.com/in/emekaogbuchidubem/",
  },
  {
    label: "Telegram",
    icon: "/images/telegram.svg",
    href: "https://t.me/heislaflame",
  },
  {
    label: "Twitter",
    icon: "/images/x.svg",
    href: "https://x.com/heislaflame",
  },
  { label: "Resume", icon: "/images/word.png", href: "/docs/resume.pdf" },
];

// ── Window state ──────────────────────────────────────────────────────
interface WindowState {
  isOpen: boolean;
  isMaximized: boolean;
  isMinimized: boolean; // true = taskbar indicator shown (app was opened at some point)
  isFocused: boolean;
  zIndex: number;
}

function createDefaultWindowState(): WindowState {
  return {
    isOpen: false,
    isMaximized: false,
    isMinimized: false,
    isFocused: false,
    zIndex: 1,
  };
}

function createInitialStates(): Record<string, WindowState> {
  const states: Record<string, WindowState> = {
    search: createDefaultWindowState(),
  };
  for (const app of APP_CONFIGS) {
    states[app.id] = createDefaultWindowState();
  }
  return states;
}

// ── Component ─────────────────────────────────────────────────────────
export default function Taskbar({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(new Date());
  const [windows, setWindows] =
    useState<Record<string, WindowState>>(createInitialStates);
  const [searchQuery, setSearchQuery] = useState("");
  const zCounter = useRef(10);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Clock — sync to the start of the next minute so the first tick is accurate
  useEffect(() => {
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeout = setTimeout(() => {
      setNow(new Date());
      const interval = setInterval(() => setNow(new Date()), 60000);
      return () => clearInterval(interval);
    }, msUntilNextMinute);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-focus search input when panel opens
  useEffect(() => {
    if (windows.search.isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [windows.search.isOpen]);

  // ── Helpers ──────────────────────────────────────────────────────────
  const nextZ = useCallback(() => {
    zCounter.current += 1;
    return zCounter.current;
  }, []);

  const updateWindow = useCallback(
    (id: string, patch: Partial<WindowState>) => {
      setWindows((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
    },
    [],
  );

  const unfocusAll = useCallback(() => {
    setWindows((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        next[key] = { ...next[key], isFocused: false };
      }
      return next;
    });
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(next)) {
        next[key] = { ...next[key], isFocused: key === id };
      }
      return next;
    });
  }, []);

  // ── Taskbar icon click handler ──────────────────────────────────────
  const handleTaskbarClick = useCallback(
    (id: string) => {
      const win = windows[id];
      if (win.isOpen) {
        // Window is visible — minimize it
        updateWindow(id, { isOpen: false, isFocused: false });
        unfocusAll();
      } else if (win.isMinimized) {
        // Window was minimized — restore it
        updateWindow(id, { isOpen: true, isFocused: true, zIndex: nextZ() });
        focusWindow(id);
      } else {
        // Window never opened or was closed — open fresh
        updateWindow(id, {
          isOpen: true,
          isMinimized: true,
          isFocused: true,
          zIndex: nextZ(),
        });
        focusWindow(id);
      }
      updateWindow("search", { isOpen: false });
    },
    [windows, updateWindow, unfocusAll, focusWindow, nextZ],
  );

  // ── Desktop background click — only unfocus, don't close ───────────
  const handleDesktopClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      unfocusAll();
      updateWindow("search", { isOpen: false });
    },
    [unfocusAll, updateWindow],
  );

  // ── Search filtering ───────────────────────────────────────────────
  const query = searchQuery.toLowerCase().trim();

  const filteredApps = useMemo(
    () =>
      query
        ? APP_CONFIGS.filter((a) => a.title.toLowerCase().includes(query))
        : APP_CONFIGS,
    [query],
  );

  const filteredLinks = useMemo(
    () =>
      query
        ? QUICK_LINKS.filter((l) => l.label.toLowerCase().includes(query))
        : QUICK_LINKS,
    [query],
  );

  // Open an app from the search panel
  const openAppFromSearch = useCallback(
    (id: string) => {
      updateWindow(id, {
        isOpen: true,
        isMinimized: true,
        isFocused: true,
        zIndex: nextZ(),
      });
      focusWindow(id);
      updateWindow("search", { isOpen: false });
      setSearchQuery("");
    },
    [updateWindow, focusWindow, nextZ],
  );

  // ── Render ──────────────────────────────────────────────────────────
  return (
    <>
      {/* Desktop background */}
      <div
        className="desktop-bg fixed inset-0"
        onMouseDown={handleDesktopClick}
      >
        {children}
      </div>

      <AnimatePresence>
        {/* ── Search Panel ─────────────────────────────────────────── */}
        {windows.search.isOpen && (
          <motion.div
            key="search"
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ zIndex: windows.search.zIndex }}
            onMouseDown={(e) => {
              e.stopPropagation();
              updateWindow("search", { zIndex: nextZ() });
            }}
            className="w-[40%] fixed bottom-14 left-1/2 -translate-x-1/2 rounded-lg shadow-2xl overflow-hidden windows-white-bg flex flex-col"
            id="search-panel"
          >
            {/* Search input */}
            <div className="relative p-3 pb-2">
              <img
                src="/images/search.svg"
                alt=""
                width={16}
                height={16}
                className="absolute left-6 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                ref={searchInputRef}
                type="text"
                className="search-input"
                placeholder="Type here to search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onMouseDown={(e) => e.stopPropagation()}
              />
            </div>

            {/* Scrollable content */}
            <div
              className="flex-1 overflow-y-auto pb-3"
              style={{ maxHeight: "calc(85vh - 80px)" }}
            >
              {/* Apps section */}
              {filteredApps.length > 0 && (
                <>
                  <p className="search-section-title">
                    {query ? "Apps" : "Recent"}
                  </p>
                  <div className="flex flex-wrap gap-1 px-3">
                    {filteredApps.map((app) => (
                      <div
                        key={app.id}
                        className="search-tile"
                        onClick={(e) => {
                          e.stopPropagation();
                          openAppFromSearch(app.id);
                        }}
                      >
                        <img
                          loading="lazy"
                          src={app.icon}
                          alt={app.title}
                          width={32}
                          height={32}
                        />
                        <p>{app.title}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Divider */}
              {filteredApps.length > 0 && filteredLinks.length > 0 && (
                <div className="search-divider" />
              )}

              {/* Quick links section */}
              {filteredLinks.length > 0 && (
                <>
                  <p className="search-section-title">Quick Links</p>
                  <div className="flex flex-col px-2">
                    {filteredLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="search-link"
                        onClick={() => {
                          updateWindow("search", { isOpen: false });
                          setSearchQuery("");
                        }}
                      >
                        <img
                          src={link.icon}
                          alt={link.label}
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </>
              )}

              {/* No results */}
              {filteredApps.length === 0 && filteredLinks.length === 0 && (
                <div className="px-4 py-8 text-center">
                  <p className="text-sm" style={{ color: "#888" }}>
                    No results found for "{searchQuery}"
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── App Windows ──────────────────────────────────────────── */}
        {APP_CONFIGS.map((app) => {
          const win = windows[app.id];
          if (!win.isOpen) return null;
          return (
            <Rnd
              key={app.id}
              bounds="window"
              disableDragging={win.isMaximized}
              minHeight="300px"
              minWidth="300px"
              default={{
                x:
                  typeof window !== "undefined"
                    ? (window.innerWidth - app.defaultWidth) / 2
                    : 100,
                y:
                  typeof window !== "undefined"
                    ? (window.innerHeight - app.defaultHeight) / 2
                    : 100,
                width: app.defaultWidth,
                height: app.defaultHeight,
              }}
              dragHandleClassName="titlebar-drag"
              position={win.isMaximized ? { x: 0, y: 0 } : undefined}
              size={
                win.isMaximized
                  ? {
                      width:
                        typeof window !== "undefined"
                          ? window.innerWidth
                          : "100%",
                      height:
                        typeof window !== "undefined"
                          ? window.innerHeight - 52
                          : "100%",
                    }
                  : undefined
              }
              style={{ zIndex: win.zIndex }}
              onMouseDown={(e) => {
                e.stopPropagation();
                updateWindow(app.id, { zIndex: nextZ() });
                focusWindow(app.id);
                updateWindow("search", { isOpen: false });
              }}
            >
              <motion.div
                layout
                initial={{ scale: 0, y: 500 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 500 }}
                transition={{ duration: 0.35 }}
                className="windows-white-bg shadow-2xl overflow-hidden flex flex-col rounded w-full h-full"
              >
                {/* Title bar */}
                <div className="relative flex gap-4 w-full border-b border-b-black/20 rounded-t flex-row-reverse p-2 titlebar-drag cursor-grab active:cursor-grabbing">
                  <div className="absolute w-full flex gap-2 pl-3 items-center">
                    <img
                      loading="lazy"
                      src={app.icon}
                      alt={app.title}
                      width={app.id === "about" ? 25 : 20}
                      height={app.id === "about" ? 25 : 20}
                    />
                    <p>{app.title}</p>
                  </div>

                  {/* Close */}
                  <button
                    className="hover:bg-red-500 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateWindow(app.id, {
                        isOpen: false,
                        isMaximized: false,
                        isMinimized: false,
                        isFocused: false,
                      });
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/images/exit.svg"
                      alt="close"
                      width={16}
                      height={10}
                      className="invert-0"
                    />
                  </button>

                  {/* Maximize */}
                  <button
                    className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateWindow(app.id, { isMaximized: !win.isMaximized });
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/images/maximize.svg"
                      alt="maximize"
                      width={13}
                      height={10}
                      className="invert-0"
                    />
                  </button>

                  {/* Minimize */}
                  <button
                    className="hover:bg-white/10 rounded px-2 active:scale-[0.8] cursor-pointer transition-all duration-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      updateWindow(app.id, { isOpen: false, isFocused: false });
                      unfocusAll();
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/images/minimize.svg"
                      alt="minimize"
                      width={20}
                      height={10}
                      className="invert-0"
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-3">{app.component}</div>
              </motion.div>
            </Rnd>
          );
        })}
      </AnimatePresence>

      {/* ── Taskbar ──────────────────────────────────────────────────── */}
      <div className="windows-white-bg fixed bottom-0 h-13 gap-5 items-center w-full flex justify-center z-50">
        {/* Windows button */}
        <a href="/">
          <App className="h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white">
            <img
              loading="eager"
              src="/images/Windows.png"
              alt="Windows Icon"
              width={30}
              height={30}
            />
          </App>
        </a>

        {/* Search button */}
        <App
          className="flex justify-center items-center rounded-2xl cursor-pointer h-7.5 w-25"
          style={{
            backgroundColor: windows.search.isOpen
              ? "rgba(54, 129, 214)"
              : "rgba(0,0,0,0.3)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            const isOpen = !windows.search.isOpen;
            updateWindow("search", {
              isOpen,
              zIndex: isOpen ? nextZ() : windows.search.zIndex,
            });
            if (!isOpen) setSearchQuery("");
          }}
        >
          <img
            loading="eager"
            src="/images/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <p className="text-white text-[13px] px-2">Search</p>
        </App>

        {/* App icons */}
        {APP_CONFIGS.map((app) => {
          const win = windows[app.id];
          return (
            <App
              key={app.id}
              className="relative h-10 w-10 cursor-pointer rounded flex justify-center items-center hover-white"
              style={{
                backgroundColor: win.isFocused
                  ? "rgba(255, 255, 255, 0.644)"
                  : "",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleTaskbarClick(app.id);
              }}
            >
              <img
                loading="eager"
                src={app.icon}
                alt={app.title}
                width={app.id === "about" ? 60 : 30}
                height={app.id === "about" ? 60 : 30}
                className={
                  app.id === "services"
                    ? "pb-1"
                    : app.id === "projects"
                      ? "pb-px"
                      : ""
                }
              />
              {win.isMinimized && (
                <div className="absolute w-3 left-1/2 -translate-x-1/2 h-1 rounded-2xl mb-px windows-blue-bg bottom-0" />
              )}
            </App>
          );
        })}

        {/* System tray */}
        <div className="absolute right-0 flex gap-3">
          <div className="flex py-3 gap-2">
            <img
              loading="eager"
              src="/images/wifi.svg"
              alt="wifi"
              width={20}
              height={20}
              className="invert"
            />
            <img
              loading="eager"
              src="/images/speaker.svg"
              alt="speaker"
              width={20}
              height={20}
              className="invert"
            />
            <img
              loading="eager"
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
