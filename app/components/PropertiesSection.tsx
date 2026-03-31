const PropertiesSection = () => {
  return (
    <section id="propietarios" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-6 leading-tight">
              Transformación integral de inmuebles
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Convierte tu propiedad en un activo Flex Living de alto valor: lo rehabilitamos en
              tiempo récord, lo gestionamos de forma completa y garantizamos una rentabilidad
              elevada, sin que tengas que ocuparte de nada.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Conoce lo que hacemos
            </a>
          </div>
          <div className="relative aspect-video bg-card overflow-hidden flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/ROoL8lGbYik"
              title="Houxury Property Transformation"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
