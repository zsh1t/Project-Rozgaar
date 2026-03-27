import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
            Rozgar
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Program", "Impact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-display text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="mailto:salonik.in007@gmail.com"
            className="bg-gradient-accent font-display text-accent-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Support Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
