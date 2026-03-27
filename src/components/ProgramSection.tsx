import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, MessageCircle, Users, Briefcase } from "lucide-react";
import trainingImg from "@/assets/training-session.jpg";

const steps = [
  {
    icon: BookOpen,
    title: "Skill Development",
    desc: "Role-specific skill polishing and understanding job requirements in MNCs.",
  },
  {
    icon: MessageCircle,
    title: "Communication & Soft Skills",
    desc: "Spoken communication, workplace behavior, and confidence building.",
  },
  {
    icon: Users,
    title: "Interview Preparation",
    desc: "Mock interviews, resume building, and HR interaction training.",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "Direct connections with recruiters, interview scheduling, and offer conversion.",
  },
];

const ProgramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="program" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-display text-accent text-xs tracking-[0.25em] uppercase mb-4"
        >
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-lg leading-tight mb-16"
        >
          A structured pathway from training to placement
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Program details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="border-t border-border pt-6 mt-8 grid grid-cols-2 gap-4"
            >
              {[
                ["Location", "Abids, Hyderabad"],
                ["Duration", "2 Months / Batch"],
                ["Batch Size", "30 Candidates"],
                ["Annual Capacity", "120 Candidates"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-text-subtle text-xs uppercase tracking-wider">{label}</p>
                  <p className="font-display font-semibold text-foreground text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <img
              src={trainingImg}
              alt="Training session in progress"
              loading="lazy"
              width={1280}
              height={854}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
