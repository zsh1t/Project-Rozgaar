import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-hero rounded-2xl p-10 md:p-14 text-primary-foreground"
          >
            <RefreshCw className="w-10 h-10 mb-8 text-accent" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Self-Sustaining
              <br />
              by Design
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed mb-8">
              Candidates contribute 50% of their first salary back into the program,
              making it self-sustaining beyond 3 iterations.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-accent font-display font-semibold">Funding Required</span>
              <ArrowRight className="w-4 h-4 text-primary-foreground/40" />
              <span className="font-display font-bold text-xl">₹4,00,000</span>
            </div>
            <p className="text-primary-foreground/50 text-xs mt-1">For 3 initial iterations</p>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="font-display text-accent text-xs tracking-[0.25em] uppercase mb-4">
              Sustainability & Growth
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
              Built to scale, designed to last
            </h2>

            <div className="space-y-5">
              {[
                "Increase batch sizes based on demand",
                "Expand to additional localities in Hyderabad",
                "Build stronger corporate partnerships",
                "Replicate the model in other cities",
                "Proven pilot with 60% placement rate",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
