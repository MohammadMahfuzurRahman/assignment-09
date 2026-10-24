"use client";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";
export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Tutors", href: "/tutors" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];
  const learningLinks = [
    { name: "Find a Tutor", href: "/tutors" },
    { name: "Become a Tutor", href: "/add-tutor" },
    { name: "My Tutors", href: "/my-tutors" },
    { name: "My Booked Sessions", href: "/my-booked-sessions" },
  ];
  const socialLinks = [
    { name: "Facebook", label: "f", href: "https://facebook.com" },
    { name: "Instagram", label: "ig", href: "https://instagram.com" },
    { name: "LinkedIn", label: "in", href: "https://linkedin.com" },
  ];
  return (
    <footer className="mt-auto bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500 text-white">
                <GraduationCap size={26} />
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">
                Medi<span className="text-teal-400">Queue</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Connecting learners with the right tutors to make learning
              easier, smarter, and more accessible.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-sm font-semibold text-slate-300 transition hover:border-teal-400 hover:bg-teal-500 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              Learning Services
            </h3>

            <ul className="mt-5 space-y-3">
              {learningLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-teal-400"
                  >
                    {link.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href="mailto:contact@mediquee.com"
                  className="break-all text-sm text-slate-400 transition hover:text-teal-400"
                >
                  contact@mediquee.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href="tel:+8801000000000"
                  className="text-sm text-slate-400 transition hover:text-teal-400"
                >
                  +880 1000-000000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <span className="text-sm text-slate-400">
                  Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} MediQueue. All rights reserved.
          </p>
          <p className="inline-flex items-center justify-center gap-1 text-sm text-slate-500">
            Made with <Heart size={14} className="fill-teal-400 text-teal-400" />{" "}
            for better learning
          </p>
        </div>
      </div>
    </footer>
  );
}
