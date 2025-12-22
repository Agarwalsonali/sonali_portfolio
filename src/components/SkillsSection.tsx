import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

const skills = {
  frontend: [
    { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
    { name: "CSS", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
    { name: "React", level: 75, color: "from-cyan-400 to-blue-500" },
  ],
  backend: [
    { name: "Node.js", level: 70, color: "from-green-500 to-emerald-600" },
  ],
  programming: [
    { name: "C++", level: 80, color: "from-blue-500 to-indigo-600" },
    { name: "Python", level: 75, color: "from-yellow-500 to-blue-500" },
  ],
  coreCS: [
    { name: "Data Structures", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "Algorithms", level: 75, color: "from-pink-500 to-rose-500" },
  ],
  soft: [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Communication", icon: "💬" },
    { name: "Eager to Learn", icon: "📚" },
    { name: "Time Management", icon: "⏰" },
  ],
};

const AnimatedSkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(level), delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground group-hover:text-gradient transition-all duration-300">{name}</span>
        <span className="text-sm font-semibold text-foreground/60 group-hover:text-foreground transition-colors">{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-muted/50 overflow-hidden backdrop-blur-sm">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-border/50">
            <Zap className="w-4 h-4 text-orange-accent" />
            <span className="text-sm font-medium text-foreground/70">What I can do</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            My <span className="italic text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-accent to-purple-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg">
            Technologies and tools I've been mastering through projects and practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Skills */}
          <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-accent/30 hover:shadow-elevated transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-accent to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🎨</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Frontend</h3>
                <p className="text-sm text-foreground/50">UI Development</p>
              </div>
            </div>
            <div className="space-y-5">
              {skills.frontend.map((skill, i) => (
                <AnimatedSkillBar key={skill.name} {...skill} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Backend & Programming */}
          <div className="space-y-6">
            <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-green-500/30 hover:shadow-elevated transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Backend</h3>
                  <p className="text-sm text-foreground/50">Server-side</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.backend.map((skill, i) => (
                  <AnimatedSkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-indigo-500/30 hover:shadow-elevated transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Languages</h3>
                  <p className="text-sm text-foreground/50">Programming</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.programming.map((skill, i) => (
                  <AnimatedSkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
          </div>

          {/* Core CS & Soft Skills */}
          <div className="space-y-6">
            <div className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-purple-accent/30 hover:shadow-elevated transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-accent to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Core CS</h3>
                  <p className="text-sm text-foreground/50">Fundamentals</p>
                </div>
              </div>
              <div className="space-y-5">
                {skills.coreCS.map((skill, i) => (
                  <AnimatedSkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-accent/5 via-purple-accent/5 to-orange-accent/5 backdrop-blur-sm border border-border/50 hover:border-orange-accent/30 hover:shadow-elevated transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-accent to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
                  <p className="text-sm text-foreground/50">Interpersonal</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-card/80 text-foreground/80 rounded-full text-sm font-medium border border-border/50 hover:border-orange-accent/50 hover:bg-orange-accent/5 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
