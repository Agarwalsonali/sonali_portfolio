import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Heart,
  Users,
  Code,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science (2023 – Present)",
      color: "from-blue-500 to-blue-400",
    },
    {
      icon: MapPin,
      title: "University",
      description: "Central University of Rajasthan",
      color: "from-purple-500 to-purple-400",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Full Stack Web Development",
      color: "from-orange-500 to-orange-400",
    },
    {
      icon: Users,
      title: "Soft Skills",
      description: "Communication & Teamwork",
      color: "from-indigo-500 to-indigo-400",
    },
  ];

  const journey = [
    {
      year: "2023",
      title: "Started B.Tech",
      desc: "Began Computer Science journey",
    },
    {
      year: "2024",
      title: "Learning Web Dev",
      desc: "Mastering React & Node.js",
    },
    {
      year: "Present",
      title: "Building Projects",
      desc: "Creating real-world applications",
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-6"
          >
            <Code className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Get to know me</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair text-5xl md:text-6xl font-semibold"
          >
            About{" "}
            <span className="relative italic text-blue-600">
              Me
              <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-draw-line" />
            </span>
          </motion.h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-10"
          >
            {/* Bio */}
            <motion.div variants={fadeUp} className="relative pl-8">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full" />

              <h3 className="text-3xl font-semibold mb-6">
                A passionate learner on a journey to become a{" "}
                <span className="text-blue-600">Software Engineer</span>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm Sonali Agarwal, a third-year B.Tech Computer Science student
                at Central University of Rajasthan. I enjoy building real-world
                web applications.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I strongly believe in continuous learning and hands-on projects
                to grow and create impactful solutions.
              </p>
            </motion.div>

            {/* Journey */}
            <motion.div variants={fadeUp}>
              <h4 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Rocket className="text-blue-600 w-5 h-5" />
                My Journey
              </h4>

              <div className="space-y-4">
                {journey.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    <div>
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition"
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-3xl flex items-center justify-between"
            >
              <div>
                <h4 className="font-semibold">Want to collaborate?</h4>
                <p className="text-sm text-gray-600">
                  Let’s build something amazing together
                </p>
              </div>
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
