"use client";

import { Logo } from "@/components/ui/Logo";
import { navItems, type NavItem } from "@/lib/homepage-data";
import Link from "next/link";
import { useEffect, useState } from "react";

function ChevronDown() {
  return (
    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DesktopNavLink({ item }: { item: NavItem }) {
  if (item.hasDropdown) {
    return (
      <div className="group relative">
        <button
          type="button"
          className="flex items-center text-base font-medium text-black transition-colors hover:text-ecorise-600"
        >
          {item.label}
          <ChevronDown />
        </button>
        <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-gray-100 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <div className="py-2">
            {item.dropdownItems.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="block px-4 py-3 text-sm text-black transition-colors hover:bg-gray-50 hover:text-ecorise-600"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="text-base font-medium text-black transition-colors hover:text-ecorise-600"
    >
      {item.label}
    </Link>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (item.hasDropdown) {
    return (
      <div className="mb-2">
        <div className="border-b border-gray-100 py-2 text-base font-semibold text-black">
          {item.label}
        </div>
        {item.dropdownItems.map((sub) => (
          <Link
            key={sub.label}
            href={sub.href}
            onClick={onNavigate}
            className="block py-2 pl-4 text-sm text-black transition-colors hover:text-ecorise-600"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="block py-3 text-base text-black transition-colors hover:text-ecorise-600"
    >
      {item.label}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-menu")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ecorise-mint bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <nav className="hidden shrink-0 items-center gap-4 md:flex lg:gap-6 xl:gap-8">
            {navItems.map((item) => (
              <DesktopNavLink key={item.label} item={item} />
            ))}
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="hamburger-menu flex items-center md:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-ecorise-600 transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ecorise-600 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-ecorise-600 transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu absolute w-full overflow-hidden bg-white shadow-md transition-all duration-300 md:hidden ${
          isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onNavigate={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
