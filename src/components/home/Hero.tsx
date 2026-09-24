import Image from "next/image";
import Link from "next/link";
import workoutImage from "@/assets/banner.png";

export default function Hero() {
  return (
    <section className="border-b border-white/10 bg-[#0b0d0f]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">

        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            <span className="text-[#ccff00]">
              Log Every Set.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            Browse Workouts
            <span>→</span>
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={workoutImage}
            alt="Workout"
            className="h-[350px] w-full object-contain sm:h-[450px]"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0f]/70 to-transparent" />
        </div>

      </div>
    </section>
  );
}