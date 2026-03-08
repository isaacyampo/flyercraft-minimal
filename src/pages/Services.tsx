const Services = () => {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 text-foreground">
          Services
        </h1>
        <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mb-16">
          Consultancy and support services for funders and non-profits, with a focus on
          migrant services in the US and Latin America.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Non-profits */}
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-6">
              For Non-Profit Organizations
            </h2>
            <ul className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
              <li className="border-l-2 border-accent pl-4">
                Grant writing and editing — prospectus, LOI, proposals of various lengths
              </li>
              <li className="border-l-2 border-border pl-4">
                Prospect research and analysis
              </li>
              <li className="border-l-2 border-accent pl-4">
                Program design, planning, implementation, and success indicators
              </li>
              <li className="border-l-2 border-border pl-4">
                Executive mentoring
              </li>
              <li className="border-l-2 border-accent pl-4">
                Basic graphic design and website development
              </li>
              <li className="border-l-2 border-border pl-4">
                Facilitation (in Spanish)
              </li>
            </ul>
          </div>

          {/* Funders */}
          <div>
            <h2 className="text-sm tracking-[0.2em] uppercase text-accent font-body mb-6">
              For Funders
            </h2>
            <ul className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
              <li className="border-l-2 border-accent pl-4">
                Communications — translation and interpretation, English/Spanish
              </li>
              <li className="border-l-2 border-border pl-4">
                Cultural facilitation between funders and grantees
              </li>
              <li className="border-l-2 border-accent pl-4">
                Research on impact opportunities in migration, human rights, and humanitarian assistance
              </li>
              <li className="border-l-2 border-border pl-4">
                Proposal review
              </li>
              <li className="border-l-2 border-accent pl-4">
                Development of funding guidelines and reporting requirements
              </li>
              <li className="border-l-2 border-border pl-4">
                Basic graphic design and website development
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
