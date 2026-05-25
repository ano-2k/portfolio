import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
