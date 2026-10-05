"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Menu, X, ExternalLink } from "lucide-react";
import { SiteSettings } from "@/types/settings";

interface NavbarProps {
  settings: SiteSettings;
}

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#qui-suis-je", label: "Qui suis-je ?" },
  { href: "#psychomotricite", label: "La Psychomotricité" },
  { href: "#infos-pratiques", label: "Cabinet & Tarifs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ settings }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#E8E4DC]/80 py-3"
          : "bg-[#FDFBF7]/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Titre */}
        <Link
          href="#accueil"
          onClick={closeMenu}
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg p-1"
        >
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#232B28] group-hover:text-sage-700 transition-colors">
            {settings.contact.fullName}
          </span>
          <span className="text-xs font-medium tracking-wide text-sage-600 uppercase">
            {settings.contact.title}
          </span>
        </Link>

        {/* Liens Desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#58625E] hover:text-[#232B28] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action RDV Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={settings.contact.doctolibUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage-600"
          >
            <Calendar className="w-4 h-4" />
            <span>Prendre RDV</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Bouton Burger Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="md:hidden p-2 text-[#232B28] hover:text-sage-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Tiroir Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8E4DC] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-[#232B28] hover:text-sage-700 py-2 border-b border-[#E8E4DC]/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={settings.contact.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-sage-600 hover:bg-sage-700 shadow transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre RDV sur Doctolib</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
