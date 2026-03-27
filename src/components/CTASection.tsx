import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const [copyLabel, setCopyLabel] = useState("Copy Email");
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const email = "salonik.in007@gmail.com";
  const mailtoHref = `mailto:${email}?subject=Project%20Rozgar%20Inquiry&body=Hi%20Project%20Rozgar%20Team%2C%0A%0A`;
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const outlookComposeHref = `https://outlook.office.com/mail/deeplink/compose?to=${email}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy Email"), 2000);
    } catch {
      setCopyLabel("Copy failed");
      setTimeout(() => setCopyLabel("Copy Email"), 2000);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-display text-accent text-xs tracking-[0.25em] uppercase mb-4">
            Join the Movement
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            An investment in livelihoods, families & communities
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Project Rozgar is more than a training program—it is a pathway to dignity,
            stability, and community transformation. With your support, this initiative
            can create a self-sustaining cycle of opportunity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailtoHref}
              className="inline-block bg-gradient-accent font-display font-semibold text-accent-foreground px-10 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href={gmailComposeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border font-display font-semibold text-foreground px-6 py-4 rounded-lg text-sm tracking-wide hover:bg-muted transition-colors"
            >
              Open in Gmail
            </a>
            <a
              href={outlookComposeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border font-display font-semibold text-foreground px-6 py-4 rounded-lg text-sm tracking-wide hover:bg-muted transition-colors"
            >
              Open in Outlook
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-block border border-border font-display font-semibold text-foreground px-6 py-4 rounded-lg text-sm tracking-wide hover:bg-muted transition-colors"
            >
              {copyLabel}
            </button>
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-display font-semibold text-foreground mb-1">Founder</h4>
              <p className="text-muted-foreground text-sm">
                Mir Hashim Ali
                <br />
                Co-founder of ROTITO · Managing Director of SALONIK
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-text-subtle" />
                <a
                  href={mailtoHref}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-text-subtle" />
                <span className="text-sm text-muted-foreground">+91 8142996285</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-text-subtle" />
                <span className="text-sm text-muted-foreground">
                  302, Methodist Complex, Abids, Hyderabad 500001
                </span>
              </div>
            </div>
            <div className="md:text-right">
              <blockquote className="text-muted-foreground text-sm italic">
                "Knowledge and practice are twins, and both go together"
              </blockquote>
              <p className="text-text-subtle text-xs mt-1">— Imam Ali (a.s.)</p>
            </div>
          </div>

          <p className="text-text-subtle text-xs text-center mt-12">
            © 2025 Project Rozgar. A pro bono social initiative.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
