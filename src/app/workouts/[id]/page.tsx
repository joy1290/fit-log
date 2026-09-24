import { getAllWorkouts } from "@/lib/workouts";
import Link from "next/link";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/home/WorkoutActions";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;

  const workouts = await getAllWorkouts();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  return (
    <main className="bg-[#0b0d0f]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-[#ccff00]"
        >
          ← Back to workouts
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111417]">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>

            {/* Categories */}
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.category.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-5 leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#111417]">

              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="font-black uppercase">
                  Key Specs
                </h2>
              </div>

              <div className="divide-y divide-white/10">

                <SpecRow
                  label="Equipment"
                  value={workout.equipment}
                />

                <SpecRow
                  label="Difficulty"
                  value={workout.difficulty}
                />

                <SpecRow
                  label="Sets"
                  value={String(workout.sets)}
                />

                <SpecRow
                  label="Reps"
                  value={workout.reps}
                />

                <SpecRow
                  label="Duration"
                  value={`${workout.duration} min`}
                />

                <SpecRow
                  label="Calories"
                  value={`${workout.calories} kcal`}
                />

                <SpecRow
                  label="Rating"
                  value={`★ ${workout.rating}`}
                />

              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">

              <h2 className="mb-4 text-xl font-black uppercase">
                Instructions
              </h2>

              <ol className="space-y-4">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-400"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>

            </div>

            {/* Add / Save Buttons */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-white">
        {value}
      </span>
    </div>
  );
}