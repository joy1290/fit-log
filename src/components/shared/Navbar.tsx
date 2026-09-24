"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
              <Image
                src={logo}
                alt="FitLog Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
            </div>

            <span className="text-xl font-black tracking-wide text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
                isWorkoutActive
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase ${
                isPlanActive
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Desktop Counters */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/my-plan"
              className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
            >
              Plan {plan.length}
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-[#ccff00] px-4 py-2 text-xs font-black uppercase text-[#ccff00]"
            >
              Saved {saved.length}
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-bold uppercase ${
                  isWorkoutActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400"
                }`}
              >
                Workout
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-bold uppercase ${
                  isPlanActive
                    ? "bg-[#ccff00] text-black"
                    : "text-gray-400"
                }`}
              >
                My Plan
              </Link>

              <div className="mt-2 flex gap-2">
                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-full bg-[#ccff00] px-4 py-2 text-center text-xs font-black uppercase text-black"
                >
                  Plan {plan.length}
                </Link>

                <Link
                  href="/my-plan"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-full border border-[#ccff00] px-4 py-2 text-center text-xs font-black uppercase text-[#ccff00]"
                >
                  Saved {saved.length}
                </Link>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}