import { Project } from "@/Types/project";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      image: "/path/to/image1.jpg",
      link: "https://example.com/project1",
      gitorweb: 'git'
    },
    {
      title: "Project 2",
      description: "Description for Project 2", 
      image: "/path/to/image2.jpg",
      link: "https://example.com/project2",
      gitorweb: 'web'
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        image: "/path/to/image3.jpg",
        link: "https://example.com/project3",
        gitorweb: 'git'
    }
  
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative bg-card/10 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <CardHeader className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.gitorweb === 'git' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-foreground/20 text-foreground border border-foreground/30'
                  }`}>
                    {project.gitorweb === 'git' ? 'GitHub' : 'Live Demo'}
                  </span>
                </div>
              </CardHeader>

              {/* Project Content */}
              <div className="p-6">
                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-card-foreground/80 mb-4 line-clamp-2">
                  {project.description}
                </CardDescription>
                
                {/* Project Link */}
               <CardAction>
                
                </CardAction>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
               

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary/10 border border-primary/30 rounded-2xl backdrop-blur-sm">
            <span className="text-foreground font-medium">
              Interested in working together?
            </span>
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/40 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
                

      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}