import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#0b0d0f] px-4">
      <div className="text-center">

        <p className="text-7xl font-black text-[#ccff00] sm:text-9xl">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black uppercase">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-gray-500">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:scale-105"
        >
          Back to Workouts
        </Link>

      </div>
    </main>
  );
}