"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="flex md:flex-row flex-col justify-between p-4 items-center text-center sticky top-0 bg-[var(--blue-eclipse-1)] text-white z-10">
      <Link
        className="md:block hidden text-[#8686ac] hover:text-white"
        href="/"
      >
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
      <div className="md:block hidden">
        <Button variant="outline" size="md" children="Download CV" />
      </div>
      <div className="md:hidden block">
        <ul className="flex gap-4 items-center">
          <li>
            <Link className="text-[#8686ac] hover:text-white" href="/">
              Logo
            </Link>
          </li>
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
          <li>
            <Button variant="outline" size="md" children="Download CV" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
