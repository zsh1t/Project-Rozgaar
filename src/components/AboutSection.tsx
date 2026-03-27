import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "60%", label: "Pilot Placement Rate" },
  { number: "120", label: "Candidates per Year" },
  { number: "₹3.2Cr", label: "Annual Income Generated" },
  { number: "9/15", label: "Beta Placements" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-accent text-xs tracking-[0.25em] uppercase mb-4"
        >
          The Problem
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Education exists,
              <br />
              <span className="text-muted-foreground">but employability is missing.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              India witnesses a paradox where increasing access to education has not translated
              into proportional employment. Within underserved communities in Hyderabad, educated
              youth remain unemployed due to limited corporate exposure, lack of interview
              readiness, and minimal access to professional networks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This leads to declining confidence, delayed financial independence, increased
              household poverty, and reduced economic mobility across generations.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {stat.number}
              </p>
              <p className="text-text-subtle text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
