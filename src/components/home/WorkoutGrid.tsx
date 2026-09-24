"use client";

import { useMemo, useState } from "react";
import { Workout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";

type Props = {
  workouts: Workout[];
};

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutGrid({ workouts }: Props) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.calories - b.calories;
      }

      return b.rating - a.rating;
    });
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="bg-[#0b0d0f] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
              Explore
            </p>

            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              The Library
            </h2>

            <p className="mt-2 text-gray-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div>
            <label
              htmlFor="sort"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as SortOption)
              }
              className="min-w-[180px] rounded-lg border border-white/10 bg-[#111417] px-4 py-3 text-sm font-bold text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}