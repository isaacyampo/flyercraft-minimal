import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-foreground">
          Get in Touch
        </h1>
        <p className="text-muted-foreground font-body leading-relaxed max-w-xl mb-16">
          Interested in working together? I'd love to hear from you.
        </p>

        <div className="space-y-8 max-w-md">
          <a
            href="mailto:LORIWINTHER6156@GMAIL.COM"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
              <Mail className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Email</p>
              <p className="text-foreground font-body text-sm">loriwinther6156@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+17734196156"
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
              <Phone className="w-5 h-5 text-foreground group-hover:text-accent-foreground transition-colors" />
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-1">Phone</p>
              <p className="text-foreground font-body text-sm">773.419.6156</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
