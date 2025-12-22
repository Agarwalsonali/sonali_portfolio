import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0e0f13] text-white overflow-hidden z-0">


      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Top divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main content */}
        <div className="py-16 grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Bio */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-playfair text-3xl italic inline-block mb-4 hover:text-white/80 transition-colors"
            >
              Sonali.
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Aspiring Full Stack Developer passionate about creating modern web
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          {/* Back to top */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                Back to top
              </span>
              <ArrowUp className="w-4 h-4 text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} Sonali Agarwal. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-sm text-white/50">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
