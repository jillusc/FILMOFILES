import Link from "next/link";
import { FilmCard } from "@/app/components";
import type { Film } from "@/app/types";

export default function FilmsGrid({ films }: { films: Film[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
      {films.map((film) => (
        <Link
          key={film.id}
          href={{
            pathname: `/browse/film/${film.id}`,
            query: { film: JSON.stringify(film) },
          }}
        >
          <FilmCard film={film} gridView={true} />
        </Link>
      ))}
    </div>
  );
}
