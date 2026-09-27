export type Workout = {
  id: number;
  name: string;
  image: string;
  category: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  calories: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
  isDone?: boolean;
};