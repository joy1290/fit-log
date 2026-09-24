import { Workout } from "@/types/workout.type";

export async function getAllWorkouts(): Promise<Workout[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL;

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_SERVER_BASE_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/data.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data.workouts;
}