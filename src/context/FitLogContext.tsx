"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types/workout.type";

type FitLogContextType = {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  addToSaved: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
};

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }
  }, []);

  

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);



  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

 

  const addToPlan = (workout: Workout) => {
    // Maximum 5 workouts
    if (plan.length >= 5) {
      return;
    }

    // Prevent duplicate workout
    if (plan.some((item) => item.id === workout.id)) {
      return;
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        isDone: false,
      },
    ]);
  };



  const removeFromPlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };


  const addToSaved = (workout: Workout) => {
    // Prevent duplicate saved workout
    if (saved.some((item) => item.id === workout.id)) {
      return;
    }

    setSaved((prev) => [...prev, workout]);
  };

  // =========================
  // Remove from Saved
  // =========================

  const removeFromSaved = (id: number) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // =========================
  // Mark Workout as Done
  // =========================

  const markAsDone = (id: number) => {
    setPlan((prev) =>
      prev.map((workout) =>
        workout.id === id
          ? {
              ...workout,
              isDone: true,
            }
          : workout
      )
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,

        addToPlan,
        removeFromPlan,

        addToSaved,
        removeFromSaved,

        markAsDone,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}



export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}