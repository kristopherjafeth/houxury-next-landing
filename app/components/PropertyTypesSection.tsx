import Image from "next/image";

const types = [
  {
    title: "Apartamentos",
    subtitle: "Confort urbano premium",
    image: "/1.jpg",
  },
  {
    title: "Coliving",
    subtitle: "Espacios diseñados para conectar",
    image: "/2.jpg",
  },
  {
    title: "Turismo",
    subtitle: "Estancias únicas en destinos clave",
    image: "/3.jpg",
  },
];

const PropertyTypesSection = () => {
  return (
    <section id="espacios" className="py-24 px-6 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((type) => (
            <div
              key={type.title}
              className="group relative overflow-hidden aspect-[4/5] rounded-[2.5rem] cursor-pointer"
            >
              <Image
                src={type.image}
                alt={type.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="mb-auto" /> {/* Spacer */}
                <h3 className="text-4xl md:text-5xl font-heading text-white mb-2 leading-tight">
                  {type.title}
                </h3>
                <p className="text-base text-white/80 font-body font-light">
                  {type.subtitle}
                </p>
                <div className="mt-auto mb-4">
                  <div className="px-10 py-3 border-2 border-white rounded-full bg-black/20 backdrop-blur-sm text-white font-body text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                    Explorar
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;
