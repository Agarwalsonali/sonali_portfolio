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

const AnimatedSkillBar = ({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">What I can do</span>
          </div>

          <h2 className="font-playfair text-5xl font-semibold mb-4">
            My <span className="italic text-blue-600">Skills</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Technologies and tools I've been mastering through projects and practice
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                🎨
              </div>
              <div>
                <h3 className="font-semibold text-lg">Frontend</h3>
                <p className="text-sm text-gray-500">UI Development</p>
              </div>
            </div>
            <div className="space-y-5">
              {skills.frontend.map((s, i) => (
                <AnimatedSkillBar key={s.name} {...s} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Backend + Languages */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                  ⚙️
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Backend</h3>
                  <p className="text-sm text-gray-500">Server-side</p>
                </div>
              </div>
              {skills.backend.map((s, i) => (
                <AnimatedSkillBar key={s.name} {...s} delay={i * 100} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  💻
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Languages</h3>
                  <p className="text-sm text-gray-500">Programming</p>
                </div>
              </div>
              {skills.programming.map((s, i) => (
                <AnimatedSkillBar key={s.name} {...s} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Core CS + Soft Skills */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  🧠
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Core CS</h3>
                  <p className="text-sm text-gray-500">Fundamentals</p>
                </div>
              </div>
              {skills.coreCS.map((s, i) => (
                <AnimatedSkillBar key={s.name} {...s} delay={i * 100} />
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  ✨
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Soft Skills</h3>
                  <p className="text-sm text-gray-500">Interpersonal</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span
                    key={s.name}
                    className="px-4 py-2 bg-white rounded-full text-sm shadow-sm"
                  >
                    {s.icon} {s.name}
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
