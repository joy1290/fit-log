"use client";

import { useFitLog } from "@/context/FitLogContext";
import { Workout } from "@/types/workout.type";
import toast from "react-hot-toast";

type Props = {
  workout: Workout;
};

export default function WorkoutActions({ workout }: Props) {
  const { plan, saved, addToPlan, addToSaved } = useFitLog();

  const handleAddToPlan = () => {
    // Maximum 5 workouts
    if (plan.length >= 5) {
      toast.error("Today's plan is full. Maximum 5 workouts!");
      return;
    }

    // Already added
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("This workout is already in today's plan!");
      return;
    }

    addToPlan(workout);

    // Success notification
    toast.success("Added to today's plan!");
  };

  const handleSave = () => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("This workout is already saved!");
      return;
    }

    addToSaved(workout);

    toast.success("Workout saved for later!");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="flex-1 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black transition hover:scale-[1.02]"
      >
        + Add to today's plan
      </button>

      <button
        onClick={handleSave}
        className="flex-1 rounded-full border border-[#ccff00] px-6 py-3 text-sm font-black uppercase text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
      >
        ♡ Save for later
      </button>
    </div>
  );
}