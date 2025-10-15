"use client";
import { Project } from "@/Types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      image: "/",
      link: "https://example.com/project1",
      gitorweb: "git",
      alt: "Project 1 Screenshot",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: "/",
      link: "https://example.com/project2",
      gitorweb: "web",
      alt: "Project 2 Screenshot",
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      image: "/",
      link: "https://example.com/project3",
      gitorweb: "git",
      alt: "Project 3 Screenshot",
    },
  ];

  return (
    <section className="relative py-17 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4 py-2 leading-tight">
            My Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </div>
        {/* Call to Action */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/30 rounded-2xl backdrop-blur-sm">
            <span className="text-foreground font-medium">
              Interested in working together?
            </span>
            <button className="group relative px-4 py-2 bg-primary text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-foreground rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10" />
              Get in Touch
            </button>
          </div>
        </div>
        {/* Desktop Projects Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative bg-card/10 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation"
            >
              {/* Project Image */}
              <CardHeader className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />

                {/* Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.gitorweb === "git"
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "bg-foreground/20 text-foreground border border-foreground/30"
                    }`}
                  >
                    {project.gitorweb === "git" ? "GitHub" : "Live Demo"}
                  </span>
                </div>
              </CardHeader>

              {/* Project Content */}
              <div className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary group-active:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-card-foreground/80 mb-4 line-clamp-2 group-hover:text-card-foreground group-active:text-card-foreground transition-colors duration-300">
                  {project.description}
                </CardDescription>

                {/* Project Link */}
                <Button
                  className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 active:bg-primary/40 transition-all duration-300 border border-primary/30 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/20 cursor-pointer touch-manipulation"
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  {project.gitorweb === "git" ? (
                    <>
                      View Github{" "}
                      <FiGithub className="group-hover/btn:scale-110 group-active/btn:scale-105 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      View Website{" "}
                      <CiGlobe className="group-hover/btn:scale-110 group-active/btn:scale-105 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title}>
                  <div className="p-2">
                    <Card className="group relative bg-card/10 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Project Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.gitorweb === "git"
                                ? "bg-primary/20 text-primary border border-primary/30"
                                : "bg-foreground/20 text-foreground border border-foreground/30"
                            }`}
                          >
                            {project.gitorweb === "git"
                              ? "GitHub"
                              : "Live Demo"}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-card-foreground/80 mb-4 line-clamp-2">
                          {project.description}
                        </CardDescription>

                        {/* Project Link - FIXED BUTTON */}
                        <Button
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium hover:bg-primary/30 active:bg-primary/40 transition-all duration-300 border border-primary/30 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/20 cursor-pointer touch-manipulation"
                          onClick={() =>
                            window.open(
                              project.link,
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        >
                          {project.gitorweb === "git" ? (
                            <>
                              View Github <FiGithub />
                            </>
                          ) : (
                            <>
                              View Website <CiGlobe />
                            </>
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* RESTORED ORIGINAL ARROWS */}
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}
