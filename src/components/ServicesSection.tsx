import { Code, Layers, BookOpen, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    note: "Ideal for landing pages, portfolios, and small business websites.",
    gradient: "from-blue-accent to-cyan-500",
    bgGradient: "from-blue-accent/10 to-cyan-500/10",
    number: "01",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end web application development with both frontend and backend implementation.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    note: "Perfect for dynamic web applications with user authentication.",
    gradient: "from-purple-accent to-pink-500",
    bgGradient: "from-purple-accent/10 to-pink-500/10",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Academic Projects",
    description:
      "Assistance with academic projects, assignments, and practice-based development.",
    technologies: ["C++", "Python", "DSA", "Web Projects"],
    note: "Tailored for students and academic requirements.",
    gradient: "from-orange-accent to-rose-500",
    bgGradient: "from-orange-accent/10 to-rose-500/10",
    number: "03",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-border/50">
            <Sparkles className="w-4 h-4 text-orange-accent" />
            <span className="text-sm font-medium text-foreground/70">What I offer</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            My <span className="italic text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-accent to-purple-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg">
            Learning-level and project-based services ideal for startups, students, and academic needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                <div className="absolute inset-[1px] bg-card rounded-3xl" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number */}
                  <span className={`text-7xl font-bold bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent opacity-10 absolute -top-2 -right-2 group-hover:opacity-20 transition-opacity duration-500`}>
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${service.bgGradient} text-foreground/70 rounded-full`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-foreground/50 italic flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      {service.note}
                    </p>
                  </div>

                  {/* CTA */}
                  <a 
                    href="#contact" 
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground group/link transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50">
            <span className="text-2xl">🎓</span>
            <p className="text-foreground/60 text-sm">
              These services are offered at a <span className="text-foreground font-medium">learning level</span>. Perfect for practice projects, MVPs, and building experience together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
