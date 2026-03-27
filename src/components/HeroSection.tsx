import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hyderabad community"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-accent text-sm md:text-base tracking-[0.2em] uppercase mb-6"
        >
          Skills · Jobs · Dignity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl"
        >
          Project
          <br />
          Rozgar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mt-6 leading-relaxed font-body"
        >
          Bridging the gap between education and employment through
          industry-relevant training and guaranteed placement pathways.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#about"
            className="bg-gradient-accent font-display font-semibold text-accent-foreground px-8 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="#impact"
            className="text-primary-foreground/70 font-display text-sm tracking-wide hover:text-primary-foreground transition-colors flex items-center gap-2"
          >
            See Our Impact
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-5 h-5 text-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
