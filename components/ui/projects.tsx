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
import Blureffect from "./blureffect";
import Pattern from "./pattern";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Harrod Estates",
      description:
        "A premium real estate website showcasing properties for sale and rent.",
      image: "/images/harrodestates.png",
      link: "https://www.harrodsestates.com/#/",
      gitorweb: "web",
      alt: "Harrod Estates Screenshot",
    },
    {
      title: "Don Molano",
      description: "E-commerce website for a premium Colombian coffee brand",
      image: "/images/donmolano.png",
      link: "https://donmolanocoffee.com/",
      gitorweb: "web",
      alt: "Project 2 Screenshot",
    },
    {
      title: "Intrigrow",
      description:
        "Redefining the way Pakistan save and build lasting wealth through 100% asset-backed solutions.",
      image: "/images/intrigrow.png",
      link: "https://intrigrow.com/",
      gitorweb: "web",
      alt: "Intrigrow Website Screenshot",
    },
    {
      title: "FinForecast Hub | FYP",
      description: "AI based financial forecasting SASS web application. ",
      image: "/images/fyp.png",
      link: "https://github.com/Jazib-2004/FinForecastHub-FYDP",
      gitorweb: "git",
      alt: "Project 3 Screenshot",
    },

    {
      title: "Infection Modelling using SIR",
      description:
        "Uses SIR Modeling to predict various infections to make future decisions. Focus on Covid-19",
      image: "/images/sirmodel.png",
      link: "https://github.com/rayyanlakhani/Infection-Modellng-SIR-Model",
      gitorweb: "git",
      alt: "Infection Modelling Screenshot",
    },
  ];

  // chunk helper: groups projects into slides.
  const chunkArray = (arr: Project[], size: number) => {
    const chunks: Project[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  // chunk size is chosen so each slide can hold up to 3 cards (matches lg grid).
  const desktopChunks = chunkArray(projects, 3);

  return (
    <section className="relative py-17 px-4 overflow-hidden">
      {/* Background Effects */}
      <Blureffect />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
            <a
              href="#contact"
              className="group relative px-4 py-2 bg-primary text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-foreground rounded-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Desktop: Carousel which preserves the grid layout & sizing inside each slide */}
        <div className="hidden md:block">
          <Carousel className="w-full">
            <CarouselContent>
              {desktopChunks.map((chunk, chunkIndex) => (
                <CarouselItem key={`chunk-${chunkIndex}`}>
                  {/* Keep the same grid layout/sizing as before inside each slide */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chunk.map((project) => (
                      <Card
                        key={project.title}
                        className="group relative bg-card/10 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation"
                      >
                        {/* Project Image */}
                        <CardHeader className="relative h-60 overflow-hidden p-0">
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
                              {project.gitorweb === "git"
                                ? "GitHub"
                                : "Live Demo"}
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
                              window.open(
                                project.link,
                                "_blank",
                                "noopener,noreferrer"
                              )
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Mobile: single item carousel (unchanged) */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title}>
                  <div className="p-2">
                    <Card className="group relative bg-card/10 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative h-60 overflow-hidden p-0">
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
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <Pattern />
    </section>
  );
}
