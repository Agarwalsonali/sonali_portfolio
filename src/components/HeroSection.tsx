import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImage from "../assets/profile-sonali.jpg";
import { Download } from "lucide-react";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const floating = {
  animate: {
    y: [0, -10, 0],
  },
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-[#fafafa] pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm">Available for new opportunities</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair italic text-4xl text-gray-500 mb-2"
          >
            Hey, there
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-7xl font-extrabold leading-tight"
          >
            I AM <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SONALI
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mt-4"
          >
            <span className="w-10 h-[2px] bg-blue-600" />
            <p className="tracking-widest font-medium">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 max-w-lg"
          >
            B.Tech Computer Science student at Central University of Rajasthan,
            crafting <strong>modern web experiences</strong> with passion.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="border px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 mt-10"
          >
            <div>
              <p className="text-3xl font-bold">2+</p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3rd</p>
              <p className="text-gray-500 text-sm">Year Student</p>
            </div>
          </motion.div>

          <motion.a
              variants={fadeUp}
              href="/resume/Resume.pdf"
              download
              className="inline-flex items-center gap-2
                        mt-8
                        px-6 py-2
                        rounded-full
                        text-sm font-semibold
                        text-white
                        bg-gradient-to-r from-purple-500 to-violet-600
                        shadow-[0_0_20px_rgba(139,92,246,0.6)]
                        hover:shadow-[0_0_30px_rgba(139,92,246,0.9)]
                        hover:scale-105
                        transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
        </motion.div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* Rotating ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-blue-300 animate-spin-slow" />

          {/* Image */}
          <motion.img
            src={profileImage}
            alt="Sonali"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-xl relative z-10"
          />

          {/* TECH ICONS */}
          <motion.div
            variants={floating}
            animate="animate"
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-10 top-1/4 bg-white p-3 rounded-xl shadow"
          >
            <FaReact className="text-sky-500 text-2xl" />
          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-10 top-1/3 bg-white p-3 rounded-xl shadow"
          >
            <FaNodeJs className="text-green-600 text-2xl" />
          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute left-6 bottom-10 bg-white p-3 rounded-xl shadow"
          >
            <FaJs className="text-yellow-400 text-2xl" />
          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            className="absolute right-6 bottom-16 bg-white p-3 rounded-xl shadow"
          >
            <FaHtml5 className="text-orange-500 text-2xl" />
          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute right-1/3 -bottom-6 bg-white p-3 rounded-xl shadow"
          >
            <FaCss3Alt className="text-blue-500 text-2xl" />
          </motion.div>

        </div>
         
      </div>
    </section>
  );
};

export default HeroSection;
