"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Rocket, Users, Heart, Sparkles } from "lucide-react";
import { FaChessKnight, FaPlaneDeparture } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import BlurEffect from "./blureffect";
import Pattern from "./pattern";

export default function About() {
  const skills = [
    {
      name: "Chess",
      level: 90,
      icon: FaChessKnight,
      color: "from-primary to-foreground",
      stat: "1700+ FIDE Rating",
    },
    {
      name: "Travelling",
      level: 85,
      icon: FaPlaneDeparture,
      color: "from-foreground to-primary",
      stat: "5+ Solo Trips",
    },
    {
      name: "Film",
      level: 95,
      icon: MdMovie,
      color: "from-primary to-foreground",
      stat: "David Lynch Fan",
    },
    {
      name: "Meeting new people",
      level: 88,
      icon: Users,
      color: "from-foreground to-primary",
      stat: "New Prespectives",
    },
  ];

  return (
    <section className="relative flex items-center justify-center px-4 py-5 overflow-hidden">
      {/* Background Effects */}
      <BlurEffect />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
            <Sparkles className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 py-2 leading-tight">
            Creative Developer
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Passionate about building digital experiences that blend beautiful
            design with cutting-edge technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main About Card - Enhanced for Mobile */}
          <Card className="group bg-card/10 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 active:scale-95 cursor-pointer touch-manipulation">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-foreground/20 rounded-lg  transition-colors duration-300">
                  <Heart className="size-6 text-foreground group-hover:scale-110 group-active:scale-105 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl text-foreground  transition-colors duration-300">
                  My Journey
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-primary">
                From concept to deployment,{" "}
                <span className="text-primary">
                  I love every step of the creative process.
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating responsive, performant, and accessible web
                applications. My passion lies in the intersection of design and
                technology, where I can bring creative visions to life through
                code. <br />
                <br />
                When I'm not coding, you can find me exploring new places,
                indulging in my love for film, or challenging myself with a
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "WordPress",
                  "Tailwind",
                  "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="group/tech px-3 py-1 bg-foreground/20 text-foreground rounded-full text-sm font-medium border border-foreground/30 hover:bg-foreground/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Card - Enhanced for Mobile */}
          <Card className="group bg-card/10 backdrop-blur-lg border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/10 active:scale-95 cursor-pointer touch-manipulation">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-foreground/20 rounded-lg  duration-300">
                  <Rocket className="size-6 text-foreground group-hover:scale-110 group-active:scale-105 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl text-foreground transition-colors duration-300">
                  Hobbies
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group/skill space-y-2 p-3 rounded-lg hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-300 cursor-pointer touch-manipulation"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground flex items-center gap-2 group-hover/skill:text-foreground group-active/skill:text-foreground transition-colors duration-300">
                      <skill.icon className="size-4 group-hover/skill:scale-110 group-active/skill:scale-105 transition-transform duration-300" />
                      {skill.name}
                    </span>
                    <span className="text-sm text-card-foreground/70 group-hover/skill:text-foreground group-active/skill:text-foreground transition-colors duration-300">
                      {skill.stat}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200/20 rounded-full h-2 group-hover/skill:bg-gray-200/30 group-active/skill:bg-gray-200/40 transition-colors duration-300">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover/skill:brightness-110 group-active/skill:brightness-120`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
            <div id="skills" />{" "}
          </Card>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <Pattern />
    </section>
  );
}
