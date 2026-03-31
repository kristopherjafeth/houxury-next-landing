"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Blandine Verbrugge",
    date: "Hace 2 semanas",
    content: "Soy una estudiante francesa que ha venido a estudiar a Madrid. Recurrí a la agencia Houxury para encontrar alojamiento. He vivido en la Gran Vía, cerca de todo lo que necesitaba.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Galyna Lytvyn",
    date: "Hace 3 semanas",
    content: "Very good service. The apartment was exactly like the pictures and the team was very helpful during my stay.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Edgard Fonseca",
    date: "Hace 1 mes",
    content: "Ha sido un placer ser inquilino con houxury! Desde el primer momento han sido atentos en la descripción de la habitación y me han aclarado todas las dudas. Muy profesionales.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "NYLA hekier",
    date: "Hace 1 mes",
    content: "I have had an amazing time! I highly recommend. I will be with them for a year total so that speaks to my good experience overall. Great design and management.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
    >
      <ChevronRight size={20} className="text-white" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
    >
      <ChevronLeft size={20} className="text-white" />
    </button>
  );
};

const StatsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cielofondo.png"
          alt="Luxury living background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-8 text-white">
            Una experiencia de 5 estrellas
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="fill-gold text-gold" />
            ))}
          </div>
          
          <div className="space-y-1">
            <p className="text-xl text-white font-body font-light">
              +400 huéspedes felices
            </p>
            <p className="text-xs text-white/40 tracking-widest uppercase font-body">
              Calidad Garantizada Houxury
            </p>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4 pb-12 outline-none">
                <div className="group relative bg-[#1a1a1a]/40 backdrop-blur-md border border-gold/30 rounded-2xl p-8 h-full flex flex-col min-h-[320px] transition-all hover:border-gold/60">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold leading-tight">{t.name}</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-wider">{t.date}</p>
                      </div>
                    </div>
                    {/* Google Icon Placeholder */}
                    <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-[8px] font-bold text-white">G</div>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                    <div className="ml-2 w-3 h-3 bg-white/20 rounded-full flex items-center justify-center scale-75">
                      <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                    </div>
                  </div>

                  <p className="text-white/80 text-sm font-body leading-relaxed mb-6 line-clamp-4 italic">
                    "{t.content}"
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <button className="text-[10px] text-white/40 uppercase tracking-widest hover:text-white transition-colors">
                      Leer más
                    </button>
                    <Quote size={20} className="text-gold/30 rotate-180" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
