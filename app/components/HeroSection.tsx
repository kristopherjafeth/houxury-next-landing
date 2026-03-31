import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center overflow-hidden justify-between py-40 bg-black">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.4]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl lg:text-4xl  text-white font-heading font-medium leading-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Viviendas <span className="text-[#C1B191] ">en alquiler</span> por
          <br />
          España
        </h1>
        <p className="text-lg md:text-lg text-white font-body font-light tracking-widest animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Diseñamos y gestionamos tu estancia.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-12 mt-16 w-full max-w-4xl px-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        <Link
          href="https://reservaciones.houxury.es"
          className="w-full md:w-auto flex-1 py-4 border border-cream/30 text-center text-xs font-body tracking-[0.3em] uppercase text-cream hover:bg-cream/10 transition-all duration-300"
        >
          Encuentra tu espacio
        </Link>
        <Image
          src="/h.png"
          alt="Houxury Logo"
          width={60}
          height={60}
          className="hidden md:block select-none"
        />
        <a
          href="#propietarios"
          className="w-full md:w-auto flex-1 py-4 border border-cream/30 text-center text-xs font-body tracking-[0.3em] uppercase text-cream hover:bg-cream/10 transition-all duration-300"
        >
          Propietarios
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-[10px] text-white/60 font-body tracking-[0.2em] ">
        <ChevronDown size={20} className="animate-bounce text-gold" />
        <span>Desplázate por la página para descubrir más</span>
      </div>
    </section>
  );
};

export default HeroSection;
