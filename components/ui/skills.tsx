"use client";

import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiSupabase, 
  SiFirebase, 
  SiTailwindcss, 
  SiTypescript, 
  SiFigma 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" }, // Use your theme color
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

export default function Skills() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Technologies
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center p-6 bg-card/10 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-105"
              style={{
                '--skill-color': skill.color === "var(--foreground)" ? "currentColor" : skill.color
              } as React.CSSProperties}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Skill Icon */}
              <div className="relative mb-4">
                <skill.icon 
                  className="text-4xl text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--skill-color)]" 
                />
              </div>
              
              {/* Skill Name */}
              <span className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                {skill.name}
              </span>
              
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[size:200%_200%] opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/30 rounded-2xl backdrop-blur-sm">
            <span className="text-foreground font-medium">Always learning new technologies</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}