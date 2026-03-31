const InvestorsSection = () => {
  return (
    <section id="inversores" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
          Únete al Club de
        </p>
        <h2 className="text-3xl md:text-5xl font-heading mb-6">
          Inversores Houxury
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed mb-4 max-w-2xl mx-auto">
          Accede a una plataforma exclusiva donde podrás descubrir proyectos,
          simular escenarios de inversión y seguir la evolución real de cada
          oportunidad.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl mx-auto">
          Porque invertir con Houxury es mucho más que adquirir un activo, es
          formar parte de un modelo que combina rentabilidad, diseño y
          tecnología.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Acceder al Club de Inversores
        </a>
        <p className="text-xs text-muted-foreground mt-4 font-body">
          *Disponible solo para inversores verificados
        </p>
      </div>
    </section>
  );
};

export default InvestorsSection;
