import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Section } from "./Section";
import {
  Award,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Cloud,
  Code2,
  X,
} from "lucide-react";

const certificates = [
  {
    title: "Dean’s List - SLIIT CITY UNI",
    tag: "Year 02 Semester 02",
    desc: "Honored to receive the Dean’s List recognition for outstanding academic performance in Year 2 Semester 2 at SLIIT City Uni.",
    stack: ["Academic Excellence", "Dean’s List"],
    icon: Award,
    accent: "from-primary/30 to-accent/20",
    featured: true,
    file: "/certificates/y2s2.jpg",
  },

  {
    title: "Dean’s List - SLIIT CITY UNI",
    tag: "Year 02 Semester 01",
    desc: "Recognized on the Dean’s List for achieving exceptional academic results during Year 2 Semester 1.",
    stack: ["Academic Excellence", "Recognition"],
    icon: Award,
    accent: "from-accent/30 to-primary/20",
    file: "/certificates/y2s1.jpg",
  },

  {
    title: "AI/ML Engineer - Stage 2",
    tag: "SLIIT Faculty of Computing",
    desc: "Advanced certification focused on Artificial Intelligence and Machine Learning with practical experience in model development and AI problem solving.",
    stack: ["AI", "ML", "Python", "Model Training"],
    icon: BrainCircuit,
    accent: "from-primary/20 to-accent/30",
    file: "/certificates/aiml.jpg",
  },

  {
    title: "AWS Cloud Practitioner Essentials",
    tag: "AWS Certification",
    desc: "Completed foundational AWS cloud training covering cloud concepts, architecture, pricing, and security best practices.",
    stack: ["AWS", "Cloud", "Security"],
    icon: Cloud,
    accent: "from-accent/20 to-primary/30",
    file: "/certificates/AWS Course Completion Certificate.pdf",
  },

  {
    title: "Python for Beginners",
    tag: "University of Moratuwa",
    desc: "Successfully completed Python programming fundamentals through the Centre for Open & Distance Learning (CODL).",
    stack: ["Python", "Programming", "Problem Solving"],
    icon: Code2,
    accent: "from-primary/30 to-accent/20",
    file: "/certificates/Python_for_Beginners_E-Certificate.pdf",
  },

  {
    title: "Cyber Security Webinar Certification",
    tag: "NoviTech R&D",
    desc: "Completed a cybersecurity webinar focused on modern security concepts and digital protection awareness.",
    stack: ["Cyber Security", "Networking"],
    icon: ShieldCheck,
    accent: "from-accent/30 to-primary/20",
    file: "/certificates/cyber.pdf",
  },

  {
    title: "Dean’s List - SLIIT CITY UNI",
    tag: "Year 01 Semester 02",
    desc: "Achieved Dean’s List recognition for excellent academic performance during Year 1 Semester 2.",
    stack: ["Dean’s List", "Academic"],
    icon: Award,
    accent: "from-primary/20 to-accent/30",
    file: "/certificates/y1s2.jpg",
  },

  {
    title: "Python Full Stack Development",
    tag: "ICM India",
    desc: "Completed intensive full-stack development training with Django, React, databases, and deployment while building a complete e-commerce application.",
    stack: ["Django", "React", "Full Stack", "Deployment"],
    icon: Sparkles,
    accent: "from-accent/20 to-primary/30",
    featured: true,
    file: "/certificates/fullstack.pdf",
  },
];

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<string | null>(null);

  return (
    <>
      <Section
        id="certificates"
        eyebrow="05 — Certifications"
        title={
          <>
            Certifications &{" "}
            <span className="text-gradient">
              Achievements.
            </span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-5">
          {certificates.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.title + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative glass rounded-3xl p-6 md:p-8 overflow-hidden hover:-translate-y-1 transition-all hover:shadow-card ${
                  c.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${c.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary mb-2">
                        <Icon className="w-3 h-3" />
                        {c.tag}
                      </div>

                      <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                        {c.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {c.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Preview Button */}
                  <div className="mt-6">
                    <button
                      onClick={() =>
                        setSelectedCertificate(c.file)
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      Click to Preview Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* PREVIEW MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-auto max-w-[95vw] h-auto max-h-[95vh] rounded-3xl overflow-hidden glass border border-white/10 bg-black"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() =>
                  setSelectedCertificate(null)
                }
                className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 p-2 rounded-full transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* IMAGE PREVIEW */}
              {selectedCertificate.endsWith(".jpg") ||
              selectedCertificate.endsWith(".png") ||
              selectedCertificate.endsWith(".jpeg") ? (
                <img
                  src={selectedCertificate}
                  alt="Certificate Preview"
                  className="max-w-full max-h-[95vh] object-contain"
                />
              ) : (
                /* PDF PREVIEW */
                <iframe
                  src={selectedCertificate}
                  className="w-[95vw] md:w-[80vw] h-[90vh] bg-white"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}