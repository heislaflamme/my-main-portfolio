import { motion } from "framer-motion"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { useState } from "react"


gsap.registerPlugin(SplitText)

export default function Desktop() {

	const [isReady, setIsReady] = useState(false);

	useGSAP(() => {
    const split = new SplitText(".hero-text", { type: "words,chars" });
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
      opacity: 0,
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
       <div className="flex flex-col gap-3">
			<a target="_blank" rel="noopener noreferrer" href="/docs/resume.docx" className="hover-white cursor-pointer active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/word.png" alt="resume" height={50} width={50} className="m-auto"/>
				<p className="text-[15px] px-2 pt-1 text-center w-full">Resume</p>
			</a>

			<a target="_blank" rel="noopener noreferrer" href="mailto:emekaogbuchidubem@gmail.com" className="hover-white cursor-pointer active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/gmail.svg" alt="Desktop Background" height={45} width={45} className="m-auto"/>
				<p className="text-[15px] px-2 pt-1 text-center w-full">Mail</p>
			</a>

			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/emekaogbuchidubem/" className="hover-white cursor-pointer active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/linkedin.svg" alt="Desktop Background" height={45} width={45} className="m-auto"/>
				<p className="text-[15px] px-2 pt-1 text-center w-full">LinkedIn</p>
			</a>

			<a target="_blank" rel="noopener noreferrer" href="https://t.me/heislaflame" className="hover-white cursor-pointer active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/telegram.svg" alt="Desktop Background" height={45} width={45} className="m-auto"/>
				<p className="text-[15px] px-2 pt-1 text-center w-full">Telegram</p>
			</a>

			<a target="_blank" rel="noopener noreferrer" href="https://x.com/heislaflame" className="hover-white cursor-pointer active:scale-[0.9] transition-all duration-300 w-20 flex flex-col justify-center p-2 rounded">
				<img src="/images/x.svg" alt="Desktop Background" height={45} width={45} className="m-auto rounded"/>
				<p className="text-[15px] px-2 pt-1 text-center w-full">Twitter</p>
			</a>

			</div>
			<div className="hero-header flex flex-col absolute w-full gap-5 pointer-events-none h-full justify-center items-center">
				<header className={`hero-text text-8xl text-white pointer-events-auto ${isReady ? "opacity-100" : "opacity-1"}`}>
					HEY I'M CHIDUBEM
				</header>
				<motion.p initial={{ opacity: 0.01 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hero-p pointer-events-auto hover:scale-[1.05] transition-all duration-200 text-2xl text-white">A full-stack web developer ⚡</motion.p>
				<motion.p initial={{ opacity: 0.01 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="hero-p pointer-events-auto hover:scale-[1.05] transition-all duration-200 text-2xl text-white">I turn your ideas into modern, production ready SEO-optimized web applications. 🚀</motion.p>
			</div>
        </>
    )
}