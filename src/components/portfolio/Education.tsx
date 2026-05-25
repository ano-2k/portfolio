import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Section } from "./Section";
import {
  GraduationCap,
  Award,
  X,
} from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "Sep 2025 — Present",
    role: "B.Sc. (Hons) Software Engineering",
    org: "University of Bedfordshire UK",
    points: ["Jaffna, Sri Lanka"],
  },

  {
    icon: GraduationCap,
    period: "Jun 2023 — Jun 2025",
    role: "HND in Information Technology",
    org: "SLIIT NORTHERN UNI",
    points: ["Jaffna, Sri Lanka"],
  },

  {
    icon: GraduationCap,
    period: "2021",
    role: "General Certificate of Education (Advanced Level) Examination",
    org: "Kokuvil Hindu College",
    points: ["Jaffna, Sri Lanka"],
    certificate: "/certificates/12th.jpg",
  },

  {
    icon: GraduationCap,
    period: "2016 — 2017",
    role: "Secondary School Leaving Certificate",
    org: "Saraswathi Bala Mandir Matriculation School",
    points: ["Trichy, India"],
    certificate: "/certificates/10th.jpg",
  },
];

export function Education() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<string | null>(null);

  return (
    <>
      <Section
        id="education"
        eyebrow="04 — Education"
        title={
          <>
            My academic{" "}
            <span className="text-gradient">
              journey & achievements.
            </span>
          </>
        }
      >
        <div className="relative">
          {/* TIMELINE */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-8">
            {items.map((it, i) => {
              const Icon = it.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* ICON */}
                  <div className="absolute left-0 md:left-2 top-1 w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>

                  {/* CARD */}
                  <div className="glass rounded-2xl p-5 md:p-6">
                    <div className="text-xs font-mono text-primary mb-1">
                      {it.period}
                    </div>

                    <h3 className="font-display text-xl font-semibold">
                      {it.role}
                    </h3>

                    <div className="text-sm text-muted-foreground mt-0.5">
                      {it.org}
                    </div>

                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {it.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2"
                        >
                          <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />

                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    {/* PREVIEW BUTTON */}
                    {it.certificate && (
                      <div className="mt-5">
                        <button
                          onClick={() =>
                            setSelectedCertificate(
                              it.certificate
                            )
                          }
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                        >
                          <Award className="w-4 h-4" />
                          Click to Preview Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
          >
            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
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
              <img
                src={selectedCertificate}
                alt="Certificate Preview"
                className="max-w-full max-h-[95vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}