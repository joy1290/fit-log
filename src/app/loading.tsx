export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0d0f]">
      {/* Hero Skeleton */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          
          <div className="animate-pulse">
            <div className="h-4 w-36 rounded bg-white/10" />

            <div className="mt-6 h-16 w-full max-w-xl rounded bg-white/10" />

            <div className="mt-3 h-16 w-4/5 rounded bg-white/10" />

            <div className="mt-6 h-5 w-full max-w-lg rounded bg-white/10" />

            <div className="mt-8 h-12 w-48 rounded-full bg-white/10" />
          </div>

          <div className="hidden animate-pulse lg:block">
            <div className="h-[400px] rounded-2xl bg-white/10" />
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-4 w-24 rounded bg-white/10" />
          <div className="mt-3 h-10 w-56 rounded bg-white/10" />
          <div className="mt-3 h-4 w-80 rounded bg-white/10" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#111417]"
            >
              <div className="h-52 animate-pulse bg-white/10" />

              <div className="space-y-4 p-5">
                <div className="h-4 w-24 animate-pulse rounded bg-white/10" />

                <div className="h-5 w-3/4 animate-pulse rounded bg-white/10" />

                <div className="h-4 w-1/2 animate-pulse rounded bg-white/10" />

                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}