import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black noise"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* MATRIX RAIN */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(140)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -1000,
            }}
            animate={{
              y: "200vh",
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute top-0 text-green-500/30 font-mono text-sm whitespace-pre leading-3 select-none"
            style={{
              left: `${i * 0.8}%`,
            }}
          >
            {Array.from({ length: 80 }, () =>
              Math.random() > 0.5 ? "1" : "0"
            ).join("\n")}
          </motion.div>
        ))}
      </div>

      {/* CYBER GREEN GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,120,0.08),transparent_70%)]" />

      {/* EXTRA GLOW BLOBS */}
      <div className="absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full bg-green-500/10 blur-3xl animate-blob" />

      <div
        className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* STATUS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-green-300 glass rounded-full px-3 py-1.5 mb-6 border border-green-500/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-glow animate-pulse" />

            Available for opportunities
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white"
          >
            Anojan <br />

            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Uthayakumar.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
          >
            Full-Stack Developer & Software Engineering graduate crafting scalable
            web and mobile experiences with{" "}
            <span className="text-green-400">
              Django, React, Flutter
            </span>{" "}
            and a growing love for{" "}
            <span className="text-green-400">
              AI & Computer Vision
            </span>.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:-translate-y-0.5"
            >
              View my work

              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-green-500/30 bg-black/40 backdrop-blur-md text-green-300 hover:bg-green-500/10 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex items-center gap-5 text-green-400"
          >
            <a
              href="https://github.com/ano-2k"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/ano2k"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:anoaadhik@gmail.com"
              className="hover:text-green-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <span className="inline-flex items-center gap-1.5 text-xs font-mono ml-2 text-green-300">
              <MapPin className="w-3.5 h-3.5" />

              Jaffna, Sri Lanka
            </span>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 animate-float">
            
            {/* OUTER GLOW */}
            <div className="absolute inset-0 rounded-3xl bg-green-500 blur-3xl opacity-20" />

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-green-500/20 backdrop-blur-md bg-black/40 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
              <img
                src={avatar}
                alt="Anojan Uthayakumar"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* BOTTOM CARD */}
            <div className="absolute -bottom-4 -left-4 bg-black/60 border border-green-500/20 backdrop-blur-md rounded-2xl px-4 py-3 text-xs font-mono shadow-xl">
              <div className="text-gray-400">
                currently
              </div>

              <div className="text-green-400">
                B.Sc (Hons) Software Eng.
              </div>
            </div>

            {/* TOP CARD */}
            <div className="absolute -top-4 -right-4 bg-black/60 border border-green-500/20 backdrop-blur-md rounded-2xl px-4 py-3 text-xs font-mono shadow-xl">
              <div className="text-green-400 text-lg font-bold">
                96%
              </div>

              <div className="text-gray-400">
                ML accuracy
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}