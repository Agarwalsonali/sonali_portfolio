
import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Car Rental Management System",
    description:
      "A comprehensive web application that allows users to browse available cars, make rental reservations, and manage their bookings online with a seamless user experience.",
    techStack: ["React", "Node.js", "JWT", "MongoDB"],
    features: [
      "User authentication with JWT",
      "Car browsing and filtering",
      "Booking management system",
      "Secure payment integration",
    ],
    githubUrl: "https://github.com/Agarwalsonali",
    gradient: "from-blue-accent via-purple-accent to-blue-accent",
    emoji: "🚗",
  },
  {
    title: "Todo Application",
    description:
      "A clean and intuitive task management application designed to help users organize their daily tasks efficiently with add, edit, and delete functionality.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    features: [
      "Add, edit, delete tasks",
      "Mark tasks as complete",
      "Persistent storage",
      "Responsive design",
    ],
    githubUrl: "https://github.com/Agarwalsonali",
    gradient: "from-orange-accent via-pink-500 to-orange-accent",
    emoji: "✅",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <Folder className="w-4 h-4 text-purple-accent" />
            <span className="text-sm font-medium text-foreground/70">Featured Work</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            My <span className="italic text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-accent to-purple-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg">
            Showcasing my learning journey through hands-on projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-border via-transparent to-border rounded-3xl" />
              <div className="absolute inset-[1px] bg-card rounded-3xl" />

              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <span className="text-2xl">{project.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-gradient transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/50">Personal Project</p>
                    </div>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-accent/10 to-purple-accent/10 text-foreground/80 rounded-full border border-border/50 hover:border-blue-accent/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <button className="flex items-center justify-center gap-2 px-5 py-3 border border-border rounded-xl font-medium hover:bg-muted hover:border-foreground/20 transition-all duration-300 group/btn">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Agarwalsonali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full font-medium hover:border-blue-accent hover:shadow-card transition-all duration-500 group"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
