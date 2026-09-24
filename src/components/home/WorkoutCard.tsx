import Link from "next/link";
import { Workout } from "@/types/workout.type";
import Image from "next/image";

type Props = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#111417] transition hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          {workout.category.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[10px] font-black text-black"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-400">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.calories} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}