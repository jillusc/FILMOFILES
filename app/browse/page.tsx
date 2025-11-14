import { FilmCard } from "@/app/components";
import singleDummyFilm from "../data/singleDummyFilm";

export default function Page() {
  return (
    <main className="text-center my-4 p-4">
      <FilmCard film={singleDummyFilm} />
    </main>
  );
}
