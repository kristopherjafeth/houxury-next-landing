import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";

// Custom TikTok SVG Icon as Lucide doesn't have it
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.06-1.4-.13-.08-.24-.17-.36-.26v7.24c-.01 2.23-.74 4.41-2.12 6.19-1.41 1.83-3.52 3.01-5.78 3.32-2.28.32-4.66-.23-6.57-1.49-1.92-1.26-3.23-3.32-3.52-5.6-.29-2.26.43-4.59 1.95-6.32 1.52-1.73 3.75-2.73 6.01-2.73.15 0 .3 0 .45.01v4.03c-1.23-.2-2.5 0-3.58.64a4.004 4.004 0 00-1.89 3.51c-.01 1.01.37 2 .1 3.1-.2 1.1-1.1 2.1-2.3 2.5-1.2.4-2.5.3-3.6-.3a4.01 4.01 0 011.84-7.46c.15-.01.3-.01.45-.01h.01v-4.04z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-start">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-6xl tracking-tight leading-none text-white hover:opacity-80 transition-opacity"
            >
              Houxury
            </Link>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[14px] font-bold tracking-[0.2em] mb-6 uppercase font-body text-white/90">
              SÍGUENOS
            </h4>
            <div className="flex gap-6 max-w-[120px]">
              <Link
                href="https://instagram.com"
                className="text-white hover:text-gold transition-colors"
                target="_blank"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://tiktok.com"
                className="text-white hover:text-gold transition-colors"
                target="_blank"
              >
                <TikTokIcon size={22} />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-white hover:text-gold transition-colors"
                target="_blank"
              >
                <Youtube size={26} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-white hover:text-gold transition-colors"
                target="_blank"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-[14px] font-bold tracking-widest mb-6 uppercase font-body text-white/90">
              CONTACTO
            </h4>
            <div className="space-y-3 font-body text-sm font-light text-white/70">
              <p>Madrid: +34 912 38 65 87</p>
              <p>Toledo: +34 912 38 65 87</p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-[14px] font-bold tracking-widest mb-6 uppercase font-body text-white/90">
              ABOUT
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="hover:text-white transition-colors"
                >
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-[14px] font-bold tracking-widest mb-6 uppercase font-body text-white/90">
              LEGAL
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-white/70">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Politica de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-28 pt-8 border-t border-white/5 text-center">
          <p className="text-[11px] font-body text-white/40 tracking-widest uppercase">
            Houxury© 2025 | Sitio desarrollado por{" "}
            <Link
              href="https://linkasoft.es"
              className="hover:text-white transition-colors"
            >
              WOWTEC
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
