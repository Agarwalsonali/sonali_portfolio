import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Bio */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-playfair text-3xl italic inline-block mb-4 hover:text-primary-foreground/80 transition-colors">
              Sonali.
            </a>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Aspiring Full Stack Developer passionate about creating modern web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-foreground group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <span className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">Back to top</span>
              <ArrowUp className="w-4 h-4 text-primary-foreground/70 group-hover:text-primary-foreground group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
            <span>© {currentYear} Sonali Agarwal.</span>
            <span>All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-sm text-primary-foreground/50">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
