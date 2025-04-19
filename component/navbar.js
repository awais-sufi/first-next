"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <nav className="bg-[#F7FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              <img src="/main-logo.svg" alt="logo" width={30} height={30} />
              <h2 className="text-black font-semibold text-2xl">Starter</h2>
            </div>

            <div className="hidden sm:flex space-x-4">
              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Github
              </a>
              <a
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
            <a
              href="#"
              className="block text-black px-3 py-2 rounded-md text-base font-medium"
            >
             Github
            </a>
            <a
              href="#"
              className="block text-black px-3 py-2 rounded-md text-base font-medium"
            >
              Sign in
            </a>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
