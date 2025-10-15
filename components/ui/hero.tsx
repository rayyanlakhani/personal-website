"use client";

import dynamic from "next/dynamic";
import ThemeToggle from "./theme-toggle";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Hero() {
  return (<>
    <div id="home" className=" text-white/0">f</div>
    <section className="relative flex items-center justify-center px-4 overflow-hidden mt-36">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ThemeToggle />

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            RAYYAN
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            LAKHANI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
          Building digital experiences with modern technology and hoping to
          become your next:
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
          <button className="group relative px-4 sm:px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation select-none">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-foreground rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10" />
            Contact Me
          </button>

          {/* Download Resume Button */}
          <button id="about" className="group px-4 sm:px-8 py-4 border-2 border-primary text-foreground rounded-2xl font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105 active:scale-95 active:bg-primary/20 cursor-pointer touch-manipulation select-none">
            Download Resume
          </button>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
    </>
  );
}