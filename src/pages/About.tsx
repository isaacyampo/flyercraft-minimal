import loriPortrait from "@/assets/lori-portrait.png";

const About = () => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
          <img src={loriPortrait} alt="Lori Winther" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-foreground">
            Lori Winther
          </h1>
          <p className="text-sm tracking-[0.25em] uppercase text-accent font-body mb-6">
            Humanitarian · Human Rights Promoter · Global Citizen
          </p>
          <p className="text-muted-foreground font-body leading-relaxed max-w-xl">
            My life pursuits stem directly from my passions. I am an experienced and effective
            non-profit leader, organizer, and manager skilled in leadership development, global
            human rights and protection, and community self-empowerment programs.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-border" />
      </div>

      {/* Background */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-heading font-semibold mb-8 text-foreground">Background</h2>
        <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mb-8">
          I have served as a key participant and leader in developing and integrating grassroots,
          cross-cultural empowerment programming in various settings. I bring cultural acumen to
          every project I take on, with specific expertise in Latin American cultures.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
          With more than 35 years of experience in grant writing and program management, my
          portfolio includes grants secured from foundations, city, state, and federal entities,
          and corporate sponsorships.
        </p>
      </section>

      {/* Positions */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-heading font-semibold mb-8 text-foreground">Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-4">
              Previous Positions
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
              <li>US National Coordinator, Franciscan Network for Migrants</li>
              <li>Executive Secretary, Franciscan Network for Migrants—Americas</li>
              <li>Co-Founder, President and CEO, Chicago Clerkships</li>
              <li>Executive Director, Chicago Global Donors Network</li>
              <li>Executive Director, Centro San Bonifacio</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-4">
              Other Experiences
            </h3>
            <ul className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
              <li>Organizational Consultant, La 72 Migrant Shelter, México</li>
              <li>Co-Founder, Café Fénix, Chicago</li>
              <li>Co-Founder, Centro San Bonifacio, Chicago</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-heading font-semibold mb-8 text-foreground">Education</h2>
        <ul className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
          <li>Master of Arts, Latin American Studies — UCLA</li>
          <li>Master of Public Health — UCLA</li>
          <li>Bachelor of Arts, English — UCLA</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
