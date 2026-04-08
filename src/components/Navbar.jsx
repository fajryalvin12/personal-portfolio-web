"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="flex justify-between p-4 items-center sticky top-0 bg-[#0F0E47] text-white">
        <Link className="text-[#8686ac] hover:text-white" href="/">
          Logo
        </Link>
        <ul className="md:flex md:gap-4 md:block hidden">
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
        <a
          className="border px-2 py-1 rounded-md shadow-md bg-white text-[#0f0e47] font-semibold"
          href=""
        >
          Download CV
        </a>
      </nav>
    </>
  );
}
