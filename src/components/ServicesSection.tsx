import { Code, Layers, BookOpen, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    note: "Ideal for landing pages, portfolios, and small business websites.",
    gradient: "from-blue-500 to-cyan-500",
    softBg: "from-blue-500/10 to-cyan-500/10",
    number: "01",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "End-to-end web application development with both frontend and backend implementation.",
    technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
    note: "Perfect for dynamic web applications with authentication.",
    gradient: "from-purple-500 to-pink-500",
    softBg: "from-purple-500/10 to-pink-500/10",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Academic Projects",
    description:
      "Assistance with academic projects, assignments, and practice-based development.",
    technologies: ["C++", "Python", "DSA", "Web Projects"],
    note: "Tailored for students and academic requirements.",
    gradient: "from-orange-500 to-rose-500",
    softBg: "from-orange-500/10 to-rose-500/10",
    number: "03",
  },
];

const ServicesSection = () => {
  return (
    <section
  id="services"
  className="section-padding relative overflow-hidden mt-32 md:mt-40"
>
      {/* Background blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-muted-foreground">
              What I offer
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold">
            My <span className="italic text-gradient">Services</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Learning-level and project-based services ideal for startups,
            students, and academic needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Glow border */}
              <div
                className={`absolute -inset-[2px] bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
              />

              {/* Card */}
              <div className="relative h-full rounded-3xl bg-card border p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Number watermark */}
                <span
                  className={`absolute top-6 right-6 text-7xl font-bold bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent opacity-10`}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${service.softBg}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-4" />

                {/* Note */}
                <p className="text-sm text-muted-foreground italic flex gap-2">
                  💡 {service.note}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-sm text-muted-foreground hover:text-foreground transition"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border shadow-sm">
            🎓
            <p className="text-sm text-muted-foreground">
              These services are offered at a{" "}
              <span className="font-medium text-foreground">
                learning level
              </span>
              , perfect for MVPs and practice projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
