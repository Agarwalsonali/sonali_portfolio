import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Sonali",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
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
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sonali Agarwal",
      href: "https://linkedin.com/in/sonali-agarwal",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Agarwalsonali",
      href: "https://github.com/Agarwalsonali",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur border mb-6">
            <MessageCircle className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">Let’s talk</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold">
            Get In{" "}
            <span className="italic bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />

          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Card */}
          <div className="lg:col-span-2">
            <div className="h-full p-8 rounded-3xl bg-card/60 backdrop-blur border hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-4">Let’s Connect</h3>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                I’m always excited to discuss new opportunities, collaborate on
                projects, or simply chat about technology and web development.
              </p>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border mb-6 bg-background">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-foreground/50">
                    Location
                  </p>
                  <p className="font-semibold">Rajasthan, India</p>
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
                    className="group flex items-center gap-4 p-4 rounded-2xl border bg-background hover:shadow-lg transition-all"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white`}
                    >
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase text-foreground/50">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-80 transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-card/60 backdrop-blur border hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                  <p className="text-sm text-foreground/50">
                    I’ll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border bg-background focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-4 rounded-xl border bg-background focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-4 rounded-xl border bg-background focus:ring-2 focus:ring-blue-500 outline-none transition"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center">
                    Message sent successfully 🎉
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
