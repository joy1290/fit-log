"use client";

import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout.type";
import { useFitLog } from "@/context/FitLogContext";
import toast from "react-hot-toast";

type Props = {
  workout: Workout;
  isSaved?: boolean;
};

export default function PlanCard({
  workout,
  isSaved = false,
}: Props) {
  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const handleRemove = () => {
    if (isSaved) {
      removeFromSaved(workout.id);

      toast.success("Removed from saved workouts");
    } else {
      removeFromPlan(workout.id);

      toast.success("Removed from today's plan");
    }
  };

  const handleDone = () => {
    markAsDone(workout.id);

    toast.success(`${workout.name} marked as done`);
  };

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-white/10 bg-[#111417] p-4 sm:flex-row sm:items-center">
      
      {/* Workout Image */}
      <Image
        src={workout.image}
        alt={workout.name}
        width={160}
        height={112}
        className="h-40 w-full rounded-lg object-cover sm:h-28 sm:w-40"
      />

      {/* Workout Info */}
      <div className="flex-1">
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {workout.category.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#ccff00] px-2 py-1 text-[10px] font-black text-black"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mt-2 font-black uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
          <span>◷ {workout.duration} min</span>

          <span>🔥 {workout.calories} kcal</span>

          <span>★ {workout.rating}</span>
        </div>

        {/* Done Status */}
        {!isSaved && workout.isDone && (
          <p className="mt-3 text-xs font-bold uppercase text-[#ccff00]">
            ✓ Workout completed
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 sm:flex-col">
        
        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-white/20 px-4 py-2 text-center text-xs font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        {!isSaved && (
          <button
            onClick={handleDone}
            disabled={workout.isDone}
            className={`rounded-full px-4 py-2 text-xs font-black uppercase transition ${
              workout.isDone
                ? "cursor-not-allowed bg-gray-700 text-gray-400"
                : "bg-[#ccff00] text-black hover:scale-105"
            }`}
          >
            {workout.isDone ? "✓ Done" : "✓ Mark as Done"}
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          className="rounded-full border border-red-500/40 px-4 py-2 text-xs font-bold uppercase text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          ✕ Remove
        </button>
      </div>
    </div>
  );
}