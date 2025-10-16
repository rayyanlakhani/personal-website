"use client";

import dynamic from "next/dynamic";
import ThemeToggle from "./theme-toggle";
import BlurEffect from "./blureffect";
import Pattern from "./pattern";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Hero() {
  return (
    <>
      <div id="home" className=" text-white/0">
        f
      </div>
      <section className="relative flex items-center justify-center px-4 overflow-hidden mt-15 md:mt-36">
        {/* Background Effects */}
        <BlurEffect />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <ThemeToggle />

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent font-bebas-neue font-bold">
              RAYYAN
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent font-bebas-neue">
              LAKHANI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
            Building digital experiences with modern technology and
            <span className="dark:text-primary">
              {" "}
              hoping to become your next:
            </span>{" "}
          </p>

          {/* Typewriter */}
          <div className="text-2xl md:text-3xl font-semibold min-h-[3rem] mb-12">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                cursor: "▌",
                cursorClassName: "text-primary",
                wrapperClassName: "text-primary",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("WordPress Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("SEO Specialist")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

          {/* CTA Buttons - Enhanced for Mobile */}
          <div className="flex flex-row gap-4 justify-center items-center mb-16">
            {/* Contact Me Button */}
            <a
              href="#contact"
              scroll-behavior="smooth"
              className="group relative px-4 sm:px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-foreground rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10" />
              Contact Me
            </a>

            {/* Download Resume Button */}
            <button
              id="about"
              onClick={() => {
                window.open("/Rayyan Lakhani Next.js.pdf", "_blank");
              }}
              className="group px-4 sm:px-8 py-4 border-2 border-primary text-foreground rounded-2xl font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105 active:scale-95 active:bg-primary/20 cursor-pointer touch-manipulation select-none"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
       <Pattern/>
      </section>
    </>
  );
}
