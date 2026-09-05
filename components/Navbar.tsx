"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* =========================================================
            MAIN NAVBAR
        ========================================================= */}

        <div className="flex justify-between items-center">

          {/* Logo + Website Name */}

          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo/brahmane-ai-logo.png"
              alt="Brahmane AI Academy Logo"
              width={80}
              height={80}
              priority
              className="w-14 h-14 sm:w-20 sm:h-20"
            />

            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-blue-700 leading-tight">
                Brahmane AI Academy
              </h1>

              <p className="text-xs sm:text-sm text-gray-500">
                Learn • Innovate • Transform
              </p>
            </div>
          </Link>


          {/* =======================================================
              DESKTOP NAVIGATION
          ======================================================= */}

          <div className="hidden lg:flex gap-8 text-gray-700 font-medium items-center">

            <Link
              href="/"
              className="hover:text-blue-700 transition"
            >
              Home
            </Link>

            {/* COURSES - ACTIVATED */}

            <Link
              href="/courses"
              className="hover:text-blue-700 transition"
            >
              Courses
            </Link>

            <Link
              href="/resources"
              className="hover:text-blue-700 transition"
            >
              Resources
            </Link>

            <Link
              href="/research"
              className="hover:text-blue-700 transition"
            >
              Research & Publications
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-700 transition"
            >
              About Dr. Brahmane
            </Link>

            <Link
              href="#"
              className="hover:text-blue-700 transition"
            >
              Blogs
            </Link>

            <Link
              href="#"
              className="hover:text-blue-700 transition"
            >
              Contact
            </Link>

          </div>


          {/* =======================================================
              MOBILE MENU BUTTON
          ======================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-lg
              text-gray-700
              hover:bg-blue-50
              hover:text-blue-700
              transition
            "
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (

              /* Close Icon */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            ) : (

              /* Hamburger Icon */

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

            )}
          </button>

        </div>


        {/* =========================================================
            MOBILE NAVIGATION
        ========================================================= */}

        {menuOpen && (

          <div className="lg:hidden border-t border-gray-100 mt-3 pt-3 pb-2">

            <div className="flex flex-col text-gray-700 font-medium">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Home
              </Link>


              {/* COURSES - ACTIVATED */}

              <Link
                href="/courses"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Courses
              </Link>


              <Link
                href="/resources"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Resources
              </Link>


              <Link
                href="/research"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Research & Publications
              </Link>


              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                About Dr. Brahmane
              </Link>


              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Blogs
              </Link>


              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="
                  px-4
                  py-3
                  rounded-lg
                  hover:bg-blue-50
                  hover:text-blue-700
                  transition
                "
              >
                Contact
              </Link>

            </div>

          </div>

        )}

      </div>
    </nav>
  );
}

