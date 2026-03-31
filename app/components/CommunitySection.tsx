const CommunitySection = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading mb-6 uppercase tracking-wide">
          Comunidad Houxury
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto">
          Más que un lugar donde vivir. Aquí se crea networking, se comparte
          talento y se construye futuro.
        </p>
        <a
          href="https://www.instagram.com/houxury.es/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Síguenos en Instagram
        </a>
      </div>
    </section>
  );
};

export default CommunitySection;
