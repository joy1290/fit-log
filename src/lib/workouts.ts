import fs from "fs/promises";
import path from "path";
import { Workout } from "@/types/workout.type";

export async function getAllWorkouts(): Promise<Workout[]> {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const file = await fs.readFile(filePath, "utf-8");

  const data = JSON.parse(file);

  return data.workouts;
}