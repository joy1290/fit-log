export type Workout = {
  id: number;
  name: string;
  image: string;
  category: string[];
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
  difficulty: string;
  sets: number;
  reps: string;
  description: string;
  instructions: string[];
  isDone?: boolean;
};