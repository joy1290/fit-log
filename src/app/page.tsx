import Hero from "@/components/home/Hero";
import WorkoutGrid from "@/components/home/WorkoutGrid";
import { getAllWorkouts } from "@/lib/workouts";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <>
      <Hero />
      <WorkoutGrid workouts={workouts} />
    
    </>
  );
}