"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";
import MenuIcon from "../../public/menu.png";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
    console.log("clicked");
  }
  console.log(isOpen);
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
            <li>
              <Link
                href="/about"
                onMouseEnter={() => setActive(true)}
                className="text-[#8686ac] hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onMouseEnter={() => setActive(true)}
                className="text-[#8686ac] hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                onMouseEnter={() => setActive(true)}
                className="text-[#8686ac] hover:text-white"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onMouseEnter={() => setActive(true)}
                className="text-[#8686ac] hover:text-white"
              >
                Contact
              </Link>
            </li>
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

        {isOpen && (
          <div className="fixed top-[64px] left-0 w-full bg-[var(--blue-eclipse-1)] z-[9999]">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  href="/about"
                  className="text-[#8686ac] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#8686ac] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-[#8686ac] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#8686ac] hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
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
