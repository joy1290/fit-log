"use client";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import PlanCard from "@/components/plan/PlanCard";
import EmptyPlan from "@/components/plan/EmptyPlan";

type Tab = "plan" | "saved";

export default function MyPlan() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.calories,
    0
  );

  return (
    <main className="bg-[#0b0d0f]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Header */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Your Log
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <MetricCard
            label="Exercises"
            value={plan.length}
          />

          <MetricCard
            label="Minutes"
            value={totalMinutes}
          />

          <MetricCard
            label="Calories"
            value={totalCalories}
          />
        </div>

        {/* Tabs */}
        <div className="mt-10 flex border-b border-white/10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-5 py-4 text-sm font-black uppercase ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500"
            }`}
          >
            Today's Plan
            <span className="ml-2">
              {plan.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-5 py-4 text-sm font-black uppercase ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500"
            }`}
          >
            Saved
            <span className="ml-2">
              {saved.length}
            </span>
          </button>
        </div>

        {/* Workout List */}
        <div className="mt-8 space-y-4">
          {currentList.length === 0 ? (
            <EmptyPlan />
          ) : (
            currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                isSaved={activeTab === "saved"}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#111417] p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black text-[#ccff00]">
        {value}
      </p>
    </div>
  );
}