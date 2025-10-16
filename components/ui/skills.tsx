"use client";

import { Skill } from "@/Types/skill";
import { FaLinux, FaWordpressSimple } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,  
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import Blureffect from "./blureffect";
import Pattern from "./pattern";

const skills: Skill[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#fff" }, // Fixed: changed from #fff
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "WordPress", icon: FaWordpressSimple , color: "#3776AB" }, // Fixed: proper Python blue
  { name: "Linux", icon: FaLinux, color: "#fff" }, // Fixed: changed from #ffff
];

export default function Skills() {
  return (
    <section className="relative py-5 px-4 overflow-hidden">
      {/* Background Effects */}
     <Blureffect />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" id="skills">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 py-2 leading-tight">
            Tech Stack
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/30 rounded-2xl backdrop-blur-sm">
            <span className="text-foreground font-medium">
              Always learning new technologies
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center p-6 bg-card/10 backdrop-blur-lg border border-border rounded-2xl hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer touch-manipulation"
              style={{ "--skill-color": skill.color } as React.CSSProperties}
            >
              {/* Hover background overlay */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
              
              {/* Skill Icon */}
              <div className="relative mb-4">
                <skill.icon className="text-4xl text-gray-400 transition-all duration-300 group-hover:scale-110 group-active:scale-110 group-hover:[color:var(--skill-color)] group-active:[color:var(--skill-color)]" />
              </div>
              
              {/* Skill Name */}
              <span className="text-lg font-semibold text-foreground text-center group-hover:text-primary group-active:text-primary transition-colors">
                {skill.name}
              </span>
              
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[size:200%_200%] opacity-0 group-hover:opacity-100 group-active:opacity-100 group-hover:animate-shine group-active:animate-shine" />
            </div>
          ))}
          <div id="projects"/>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
     <Pattern />
     </section>
  );
}