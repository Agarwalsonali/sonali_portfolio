import { GraduationCap, MapPin, Heart, Users, Code, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science (2023 – Present)",
      color: "from-blue-accent to-blue-accent/70",
    },
    {
      icon: MapPin,
      title: "University",
      description: "Central University of Rajasthan",
      color: "from-purple-accent to-purple-accent/70",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Full Stack Web Development",
      color: "from-orange-accent to-orange-accent/70",
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Communication & Teamwork",
      color: "from-blue-accent to-purple-accent",
    },
  ];

  const journeyItems = [
    { year: "2023", title: "Started B.Tech", description: "Began Computer Science journey" },
    { year: "2024", title: "Learning Web Dev", description: "Mastering React & Node.js" },
    { year: "Present", title: "Building Projects", description: "Creating real-world applications" },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <Code className="w-4 h-4 text-blue-accent" />
            <span className="text-sm font-medium text-foreground/70">Get to know me</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            About <span className="italic text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-accent to-purple-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-accent via-purple-accent to-orange-accent rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
                  A passionate learner on a journey to become a{" "}
                  <span className="text-gradient">Software Engineer</span>
                </h3>

                <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                  I'm Sonali Agarwal, a third-year B.Tech Computer Science student at 
                  Central University of Rajasthan. I'm currently learning full stack web 
                  development and am passionate about building real-world web applications.
                </p>

                <p className="text-foreground/70 leading-relaxed text-lg">
                  I believe in continuous learning and hands-on projects as the best way 
                  to grow. My goal is to become a successful software engineer who creates 
                  impactful solutions.
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-accent" />
                My Journey
              </h4>
              <div className="space-y-4">
                {journeyItems.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex gap-4 items-start p-4 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-blue-accent/30 hover:shadow-card transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-accent to-purple-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-sm font-bold text-accent-foreground">{item.year}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground group-hover:text-gradient transition-all">{item.title}</h5>
                      <p className="text-sm text-foreground/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-transparent hover:shadow-elevated transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <item.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-transparent to-muted/50 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}

            {/* Extra CTA Card */}
            <div className="col-span-2 p-6 rounded-3xl bg-gradient-to-br from-blue-accent/10 via-purple-accent/10 to-orange-accent/10 border border-border/50 hover:shadow-card transition-all duration-500">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Want to collaborate?</h4>
                  <p className="text-sm text-foreground/60">Let's build something amazing together</p>
                </div>
                <a 
                  href="#contact" 
                  className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
