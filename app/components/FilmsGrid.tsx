import Link from "next/link";
import { FilmCard } from "@/app/components";
import type { Film } from "@/app/types";

interface Props {
  films: Film[];
  sortOrder: string;
}

export default function FilmsGrid({ films, sortOrder }: Props) {
  // sort the films array:
  const sorted = [...films].sort((a, b) => {
    if (sortOrder === "az") return a.title.localeCompare(b.title);
    if (sortOrder === "za") return b.title.localeCompare(a.title);
    if (sortOrder === "rating") return b.vote_average - a.vote_average;
    if (sortOrder === "newest") {
      return (
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
    }
    return 0; // otherwise, no sorting selected
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {sorted.map((film) => (
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
