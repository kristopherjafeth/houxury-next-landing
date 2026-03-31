"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { label: "Espacios", href: "#espacios" },
  { label: "Propietarios", href: "#propietarios" },
  { label: "Inversores", href: "#inversores" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black h-20",
      )}
    >
      <div className=" mx-auto flex items-center justify-between h-full px-6">
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-body tracking-wider text-white hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="absolute left-1/2 -track-widest -translate-x-1/2 font-heading text-2xl tracking-[0.2em] text-cream uppercase"
        >
          <Image
            src="/logo.webp"
            alt="Houxury Logo"
            width={152}
            height={40}
            className="select-none"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <span className="text-md tracking-widest text-muted-foreground uppercase">
            EN <span className="text-foreground font-medium">ES</span>
          </span>
          <Link
            href="#contacto"
            className="px-6 py-2 border border-foreground/30 text-md rounded-lg font-body tracking-[0.2em] text-foreground hover:bg-foreground/10 transition-colors uppercase bg-[#C1B191]"
          >
            Contacto
          </Link>
        </div>

        <button
          className="md:hidden text-foreground ml-auto p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 backdrop-blur-lg z-40 transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-heading tracking-widest text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="mt-4 px-8 py-3 border border-primary text-primary uppercase tracking-[0.2em] text-sm "
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
