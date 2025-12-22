import { useEffect, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-sonali.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-blue-accent/20 to-purple-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-accent/15 to-secondary rounded-full blur-3xl"
          style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-t from-purple-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-20 w-3 h-3 bg-blue-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: "0s", animationDuration: "3s" }} />
      <div className="absolute top-48 right-32 w-2 h-2 bg-purple-accent rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s", animationDuration: "2.5s" }} />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-orange-accent rounded-full animate-bounce opacity-40" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-foreground/20 rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 animate-fade-up border border-border/50 shadow-soft group hover:shadow-card transition-all duration-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
              <Sparkles className="w-4 h-4 text-orange-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Greeting with Animated Underline */}
            <div className="relative inline-block mb-4 animate-fade-up delay-100">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl italic text-foreground/70">
                Hey, there
              </h2>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path 
                  d="M2 8C30 4 60 2 100 6C140 10 170 4 198 8" 
                  stroke="url(#underline-gradient)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(var(--blue-accent))" />
                    <stop offset="1" stopColor="hsl(var(--purple-accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Name with Gradient Hover */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6 animate-fade-up delay-200">
              <span className="block text-foreground/90 hover:text-foreground transition-colors">I AM</span>
              <span className="block relative">
                <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text hover:from-blue-accent hover:via-purple-accent hover:to-blue-accent hover:text-transparent transition-all duration-700 cursor-default">
                  SONALI
                </span>
              </span>
            </h1>

            {/* Role with Accent */}
            <div className="mb-8 animate-fade-up delay-300">
              <div className="inline-flex items-center gap-3">
                <span className="w-12 h-0.5 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full"></span>
                <p className="text-xl md:text-2xl font-semibold text-foreground/80 tracking-wide">
                  FULL STACK DEVELOPER
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground/60 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-up delay-400">
              B.Tech Computer Science student at Central University of Rajasthan, 
              crafting <span className="text-foreground font-medium">modern web experiences</span> with passion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-500">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-all duration-500 hover:shadow-elevated"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-accent to-purple-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center justify-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-medium transition-all duration-500 hover:border-blue-accent hover:bg-blue-accent/5"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <span className="w-2 h-2 rounded-full bg-foreground/40 group-hover:bg-blue-accent group-hover:scale-150 transition-all duration-300"></span>
                </span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start animate-fade-up delay-600">
              {[
                { value: "2+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "3rd", label: "Year Student" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left group cursor-default">
                  <p className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-blue-accent/30 animate-spin-slow"></div>
              <div className="absolute inset-0 -m-8 rounded-full border border-purple-accent/20"></div>
              
              {/* Decorative gradient behind image */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-accent/20 via-purple-accent/10 to-orange-accent/20 rounded-full scale-110 blur-3xl opacity-60"
                style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }}
              />
              
              {/* Profile Image with Glow */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-accent to-purple-accent rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700"></div>
                <img
                  src={profileImage}
                  alt="Sonali Agarwal - Full Stack Developer"
                  className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover object-top rounded-full shadow-elevated border-4 border-card group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Floating Badge - Tech Stack */}
              <div className="absolute -left-4 md:-left-8 top-1/3 bg-card/90 backdrop-blur-xl shadow-card px-4 py-3 rounded-2xl animate-float border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-accent to-purple-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-foreground">{'</>'}</span>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Tech Stack</p>
                    <p className="text-sm font-semibold text-foreground">React • Node.js</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Experience */}
              <div className="absolute -right-4 md:-right-8 bottom-1/4 bg-card/90 backdrop-blur-xl shadow-card px-4 py-3 rounded-2xl animate-float-delayed border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-accent to-purple-accent flex items-center justify-center">
                    <span className="text-xs">🎯</span>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Focus</p>
                    <p className="text-sm font-semibold text-foreground">Full Stack Dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
