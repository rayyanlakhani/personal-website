import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Palette, Rocket, Users, Heart, Sparkles } from "lucide-react";

export default function About() {
  const skills = [
    {
      name: "Chess",
      level: 90,
      icon: Code,
      color: "from-primary to-foreground",
    },
    {
      name: "Travelling",
      level: 85,
      icon: Palette,
      color: "from-foreground to-primary",
    },
    {
      name: "Film",
      level: 95,
      icon: Rocket,
      color: "from-primary to-foreground",
    },
    {
      name: "Meeting new people",
      level: 88,
      icon: Users,
      color: "from-foreground to-primary",
    },
  ];

  return (
    <section className="relative flex items-center justify-center px-4 py-5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-foreground/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6">
            <Sparkles className="size-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
            Creative Developer
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Passionate about building digital experiences that blend beautiful
            design with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main About Card */}
          <Card className="bg-card/10 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Heart className="size-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  My Journey
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-card-foreground/80">
                From concept to deployment, I love every step of the creative
                process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in creating responsive, performant, and accessible web
                applications. My passion lies in the intersection of design and
                technology, where I can bring creative visions to life through
                code.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind",
                  "Figma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card className="bg-card/10 backdrop-blur-lg border-foreground/20 hover:border-foreground/40 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-foreground/20 rounded-lg">
                  <Rocket className="size-6 text-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Hobbies
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground flex items-center gap-2">
                      <skill.icon className="size-4" />
                      {skill.name}
                    </span>
                    <span className="text-sm text-card-foreground/70">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200/20 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}
