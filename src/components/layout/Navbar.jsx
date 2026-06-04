"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/portfolio";
import MenuIcon from "../../../public/menu.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header>
      <nav
        aria-label="Navigasi utama"
        className="p-4 sticky top-0 bg-[var(--blue-eclipse-1)] text-white z-50 shadow-md border-b border-white/10"
      >
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center">
          <a
            href="#hero"
            className="text-[var(--blue-eclipse-2)] hover:text-white transition-colors font-semibold"
          >
            Fajry Alvin
          </a>

          <ul className="flex gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[var(--blue-eclipse-2)] hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <Button variant="outline" size="md">
            <a href="/CV ATS - Fajry Alvin Hidayat (Fullstack).pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile header row */}
        <div className="flex justify-between items-center md:hidden">
          <a
            href="#hero"
            className="text-[var(--blue-eclipse-2)] hover:text-white font-semibold"
            onClick={handleNavClick}
          >
            Fajry Alvin
          </a>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant="outline"
            size="sm"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            <Image src={MenuIcon} alt="" width={25} height={25} />
          </Button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 border-t border-white/10 pt-2">
            <ul className="flex flex-col gap-3 py-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block text-[var(--blue-eclipse-2)] hover:text-white transition-colors py-1"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/CV ATS - Fajry Alvin Hidayat (Fullstack).pdf"
                  download
                  onClick={handleNavClick}
                  className="block text-[var(--blue-eclipse-2)] hover:text-white transition-colors py-1"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
