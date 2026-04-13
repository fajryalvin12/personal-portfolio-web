"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";
import MenuIcon from "../../public/menu.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const data = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/experience",
      name: "Experience",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <nav className="p-4 sticky top-0 bg-[var(--blue-eclipse-1)] text-white z-50 shadow-md border-t border-white/10">
        {/* Desktop Navbar */}
        <div className="md:flex justify-between items-center hidden">
          <Link
            className="text-[#8686ac] hover:text-white transition-colors"
            href="/"
          >
            Logo
          </Link>
          <ul className="md:flex gap-4 hidden">
            {data.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[#8686ac] hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="md">
            <a href="/CV ATS - Fajry Alvin Hidayat (Fullstack).pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center md:hidden">
          <Link className="text-[#8686ac] hover:text-white" href="/">
            Logo
          </Link>
          <Button onClick={handleToggle} variant="outline" size="sm">
            <Image
              src={MenuIcon}
              alt="menu"
              width={25}
              height={25}
              loading="eager"
            />
          </Button>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="fixed top-[64px] left-0 w-full bg-[var(--blue-eclipse-1)] z-[9999]">
            <ul className="flex flex-col gap-4 p-4">
              {data.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#8686ac] hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/CV ATS - Fajry Alvin Hidayat (Fullstack).pdf"
                  download
                  className="text-[#8686ac] hover:text-white"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
