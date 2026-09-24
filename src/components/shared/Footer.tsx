export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a0c]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ccff00] font-black text-black">
            F
          </div>

          <span className="font-black tracking-wider text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </div>

        <p className="text-center text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}