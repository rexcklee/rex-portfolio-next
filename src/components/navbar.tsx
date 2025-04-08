"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Transition } from "@headlessui/react";
import { playwrite } from "@/app/fonts";
import Link from "next/link";

const menuItems = ["about_me", "projects", "experiences", "skills"];

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-primary`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex text-xl items-center justify-center p-2 rounded-md hover:text-highlightsecond bg-special"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiOutlineX className="block size-6" aria-hidden="true" />
              ) : (
                <HiOutlineMenu className="block size-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:items-center md:justify-between">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img
                  src="../../RexWebLogoNoBGWhite.png"
                  alt="Logo"
                  className="size-14 w-auto rounded-sm opacity-90"
                />
                <p
                  className={`text-highlight px-2 py-4 rounded-md text-xl font-medium ${playwrite.className}`}
                >
                  ChiKin Portfolio
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-3">
                {menuItems.map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className="text-highlight hover:text-highlightsecond px-3 py-4 rounded-md text-xl"
                  >
                    {section
                      .replace("_", " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div
          className={`${isOpen ? "block bg-primary/90" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="text-highlight hover:text-highlightsecond block px-3 py-2 rounded-md text-xl font-medium"
              >
                {section
                  .replace("_", " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default NavBar;
