import { FaStar } from "react-icons/fa";
import type { Film } from "@/app/types";

export default function FilmCard({ film }: { film: Film }) {
  return (
    <div className="bg-charcoal mx-auto p-8 max-w-[500px] rounded-xl">
      {/* set max-h so all images fit without cropping or stretching: */}
      <div className="max-h-[60vh] w-full flex justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 p-4 text-left">
        <div className="flex justify-between items-center">
          <h2>{film.title}</h2>
          <p>{film.release_date?.slice(0, 4)}</p>
        </div>
        <p>{film.overview}</p>
        <div className="flex justify-end items-center gap-1.5 text-lightgrey">
          <div className="flex items-center gap-1 border border-blue-500 py-0.5 pl-1.5 pr-2">
            <FaStar className="text-gold" />
            <span>{film.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
