"use client";

import { useSearchParams } from "next/navigation";
import { FilmCard } from "@/app/components";
import type { Film } from "@/app/types";
import { FaTimes } from "react-icons/fa";

export default function FilmModal() {
  const searchParams = useSearchParams();

  // get the film object from the URL query string:
  const filmString = searchParams.get("film");
  const film: Film = JSON.parse(filmString!);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative">
        {/* close button */}
        <button
          onClick={() => history.back()}
          className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-2xl"
        >
          <FaTimes />
        </button>
        <FilmCard film={film} gridView={false} />
      </div>
    </div>
  );
}
