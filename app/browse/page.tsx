"use client";
import { useEffect, useState } from "react";
import {
  FilmsGrid,
  GenresSidebar,
  SearchBar,
  SorterDropdown,
} from "@/app/components";
import type { Film } from "@/app/types";

export default function Page() {
  const [films, setFilms] = useState<Film[]>([]);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // use useEffect to fetch films when the page loads:
  useEffect(() => {
    // NOTE: fetch does NOT throw on 400/500 errors - only on real network failures
    async function fetchFilms() {
      try {
        setLoading(true);
        setError("");
        // Build the correct TMDB URL based on the current state:
        const url =
          // 1. If the user typed in the search bar → search endpoint:
          searchTerm.trim() !== ""
            ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
                searchTerm
              )}&page=${page}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`
            : // 2. Else if they selected a genre → discover endpoint (filter by genre):
              selectedGenre
              ? `https://api.themoviedb.org/3/discover/movie?with_genres=${
                  selectedGenre
                }&page=${page}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`
              : // 3. Otherwise → fetch the default popular films:
                `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`;
        // send the request and wait for the server’s response:
        const res = await fetch(url);
        // "if the server replied with an error..."
        if (!res.ok) {
          // ...convert the response body so we can read the msg:
          const msg = await res.json();
          console.error("Server error:", msg);
          // store it in state so the UI can show it (TMDb usually returns status_message):
          setError(msg.status_message || "Something went wrong.");
          return; // and stop here.
        }
        // otherwise, convert the response body so we can use the data:
        const data: { results: Film[] } = await res.json();
        const bestResults = data.results.filter(
          (film) =>
            film.poster_path &&
            film.title &&
            film.vote_average !== undefined &&
            film.vote_average !== 0
        );
        // store in state:
        // if this is page 1, replace the whole list (a brand-new search/genre/pagination reset):
        if (page === 1) {
          setFilms(bestResults);
        } else {
          // if this is page 2 or higher, add the new films onto the end of the existing list:
          setFilms((prev) => {
            // check the IDs of the existing films and skip any new ones that match:
            const existingIds = new Set(prev.map((film) => film.id));
            const noDuplicates = bestResults.filter(
              (film) => !existingIds.has(film.id)
            );
            return [...prev, ...noDuplicates];
          });
        }
      } catch (err) {
        console.error("Network error:", err);
        setError("Network error — cannot reach server.");
      } finally {
        setLoading(false);
      }
    }

    fetchFilms(); // call the function
  }, [searchTerm, selectedGenre, page]);

  // Provide fallback UI while data is loading, handle fetch errors,
  // and prevent crashes if required data is missing:
  //{
  //  loading && <p>Loading films...</p>; // moved inside the return...
  //}
  if (error) return <p>{error}</p>;
  if (!loading && films.length === 0) {
    return (
      <p className="my-6 text-center">No results found. Try another search!</p>
    );
  }

  return (
    <main className="mx-10 mb-6 p-4 pt-6">
      {/* ...moved here so that the page stays mounted while loading, allowing the search bar to keep its focus: */}
      {loading && <p className="my-6 text-center">Loading films...</p>}
      <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={setSearchTerm}
          setPage={setPage}
        />
        <SorterDropdown
          sortOrder={sortOrder}
          onSelectSortOrder={setSortOrder}
        />
      </div>

      {/* Sidebar - hidden on tablet + mobile: */}
      <div className="flex gap-8">
        <div className="hidden lg:block">
          <GenresSidebar
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
            setPage={setPage}
          />
        </div>
        <div className="flex-1">
          <FilmsGrid films={films} sortOrder={sortOrder} />
          <div className="flex justify-end mt-8">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="loadmore-btn"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
