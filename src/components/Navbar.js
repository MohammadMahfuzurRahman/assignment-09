
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  UserRound,
  CalendarDays,
  BookOpen,
  LogOut,
  Plus,
  Sun,
  Moon,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Replace these with your actual authentication state.
  const isLoggedIn = false;
  const user = {
    name: "Student",
    photo: "",
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
  ];

  const privateLinks = [
    { name: "Add Tutor", href: "/add-tutor", icon: Plus },
    { name: "My Tutors", href: "/my-tutors", icon: BookOpen },
    {
      name: "My Booked Sessions",
      href: "/my-booked-sessions",
      icon: CalendarDays,
    },
  ];

  function toggleTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
  }

  function handleLogout() {
    // Connect your real logout logic here.
    setIsProfileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
            <GraduationCap size={27} strokeWidth={2.2} />
          </span>

          <span>
            <span className="block text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Medi<span className="text-teal-600">Queue</span>
            </span>
            <span className="block text-[10px] font-medium tracking-[0.18em] text-slate-500">
              LEARN WITHOUT LIMITS
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn &&
            privateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:text-teal-700 dark:text-slate-200"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 hover:shadow-lg"
              >
                Get Started
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 p-1.5 pr-3 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                ) : (
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                    <UserRound size={20} />
                  </span>
                )}
                <span className="text-sm font-semibold text-slate-800 dark:text-white">
                  {user.name}
                </span>
                <ChevronDown size={16} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <UserRound size={17} /> My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                  >
                    <LogOut size={17} /> Log out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}

            {isLoggedIn &&
              privateLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-teal-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                );
              })}

            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            {!isLoggedIn ? (
              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-slate-200 py-3 text-center font-bold dark:border-slate-700"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-teal-600 py-3 text-center font-bold text-white"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              >
                <LogOut size={18} /> Log out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
