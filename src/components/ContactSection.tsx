import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_22ls9pr",
        "template_b8m1y0l",
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_name: "Sonali",
        },
        "HYEwYkBj1hQO1EfSN"
      );

      toast({
        title: "Message Sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at agarwalsonali922@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "agarwalsonali922@gmail.com",
      href: "mailto:agarwalsonali922@gmail.com",
      color: "hover:bg-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sonali Agarwal",
      href: "https://linkedin.com/in/sonali-agarwal",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Agarwalsonali",
      href: "https://github.com/Agarwalsonali",
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-accent/10 via-purple-accent/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-blue-accent" />
            <span className="text-sm font-medium text-foreground/70">Let's talk</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Get In <span className="italic text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-accent to-purple-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-accent/10 via-purple-accent/5 to-orange-accent/10 border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or simply chat about technology and web development.
              </p>

              {/* Location */}
              <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-card/50 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-accent to-purple-accent flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-foreground">Rajasthan, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/30 hover:border-blue-accent/30 hover:shadow-card transition-all duration-500 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${link.color} transition-all duration-300 group-hover:text-white group-hover:scale-110`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-foreground/50 uppercase tracking-wider">{link.label}</p>
                      <p className="font-medium text-foreground">{link.value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-accent to-purple-accent flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                  <p className="text-sm text-foreground/50">I'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "name" || formData.name
                          ? "-top-2.5 text-xs bg-card px-2 text-blue-accent"
                          : "top-4 text-foreground/50"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-blue-accent outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === "email" || formData.email
                          ? "-top-2.5 text-xs bg-card px-2 text-blue-accent"
                          : "top-4 text-foreground/50"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-blue-accent outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-xs bg-card px-2 text-blue-accent"
                        : "top-4 text-foreground/50"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    maxLength={1000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-background border-2 border-border focus:border-blue-accent outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-accent to-purple-accent text-accent-foreground rounded-xl font-semibold hover:shadow-elevated hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
