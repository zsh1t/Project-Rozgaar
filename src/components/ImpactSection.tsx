import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Heart, Repeat, Sparkles } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "Economic Upliftment",
    items: [
      "₹22.5–27 lakh monthly income generated",
      "₹2.7–3.24 crore annual income impact",
      "Immediate household-level financial improvement",
    ],
  },
  {
    icon: Sparkles,
    title: "Local Multiplier Effect",
    items: [
      "Increased purchasing power in neighborhoods",
      "Growth in local businesses & services",
      "Self-sustaining micro-market transformation",
    ],
  },
  {
    icon: Heart,
    title: "Social Transformation",
    items: [
      "Restores dignity and self-confidence",
      "Reduces dependency on family income",
      "Builds a culture of employment and growth",
    ],
  },
  {
    icon: Repeat,
    title: "Generational Change",
    items: [
      "One employed individual uplifts an entire family",
      "Encourages aspiration in younger generations",
      "Long-term community economic mobility",
    ],
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-display text-accent text-xs tracking-[0.25em] uppercase mb-4"
        >
          Our Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground max-w-lg leading-tight mb-6"
        >
          Transforming lives, one placement at a time
        </motion.h2>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground italic text-lg border-l-2 border-accent pl-5 mb-16 max-w-xl"
        >
          "Employment is not just income—it is dignity, stability, and the foundation
          of long-term social change."
        </motion.blockquote>

        <div className="grid md:grid-cols-2 gap-8">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                <impact.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                {impact.title}
              </h3>
              <ul className="space-y-2">
                {impact.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
