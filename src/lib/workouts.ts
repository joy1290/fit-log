import { Workout } from "@/types/workout.type";

export async function getAllWorkouts(): Promise<Workout[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await res.json();

  return data.map((workout: any) => ({
    id: workout.id,
    name: workout.name,
    image: workout.image,

    category: workout.muscleGroups,

    equipment: workout.equipment,
    difficulty: workout.difficulty,
    duration: workout.duration,

    calories: workout.caloriesBurned,

    sets: workout.sets,
    reps: workout.reps,
    rating: workout.rating,
    description: workout.description,
    instructions: workout.instructions,
  }));
}