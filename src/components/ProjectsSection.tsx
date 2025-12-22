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
    gradient: "from-blue-500 to-purple-500",
    emoji: "🚗",
  },
  {
    title: "Todo Application",
    description:
      "A clean and intuitive task management application designed to help users organize daily tasks efficiently with add, edit, and delete functionality.",
    techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    features: [
      "Add, edit, delete tasks",
      "Mark tasks as complete",
      "Persistent storage",
      "Responsive design",
    ],
    githubUrl: "https://github.com/Agarwalsonali",
    gradient: "from-orange-400 to-pink-500",
    emoji: "✅",
  },
];

const ProjectsSection = () => {
  return (
    <section
  id="projects"
  className="relative z-10 bg-background py-32 md:py-40 mt-0"
>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/60 px-4 py-2 rounded-full mb-6">
            <Folder className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium">Featured Work</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4">
            My <span className="italic text-blue-500">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />

          <p className="mt-6 text-muted-foreground text-lg">
            Showcasing my learning journey through hands-on projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}
                            opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
              />

              {/* Header */}
              <div className="relative flex justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient}
                                flex items-center justify-center text-2xl text-white shadow
                                group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {project.emoji}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Personal Project
                    </p>
                  </div>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="p-3 rounded-xl bg-muted hover:bg-black hover:text-white
                             transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {/* Description */}
              <p className="relative text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="relative flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs rounded-full bg-muted font-medium
                               hover:bg-blue-500 hover:text-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="relative mb-8">
                <h4 className="text-xs uppercase font-semibold mb-4 text-muted-foreground">
                  Key Features
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex-1 bg-black text-white py-3 rounded-xl
                             flex items-center justify-center gap-2
                             hover:shadow-lg hover:scale-[1.02] transition"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>

                <button
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border
                             hover:bg-muted hover:scale-105 transition group/btn"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Agarwalsonali"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 border rounded-full
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
