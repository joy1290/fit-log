import Link from "next/link";

export default function EmptyPlan() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-white/10 bg-[#111417] px-6 py-20 text-center">
      <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <div className="relative">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 text-2xl font-black text-[#ccff00]">
          +
        </div>

        <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
          Your plan is empty
        </p>

        <h3 className="mt-3 text-2xl font-black uppercase sm:text-3xl">
          Nothing Here Yet
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          Browse the library and add a lift to get today moving.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#ccff00] px-7 py-3 text-sm font-black uppercase text-black transition hover:scale-105"
        >
          Go to workouts →
        </Link>
      </div>
    </div>
  );
}