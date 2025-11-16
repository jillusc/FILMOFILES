"use client";
import { useEffect, useState } from "react";
import {
  FilmsGrid,
  GenresSidebar,
  SearchBar,
  SorterDropdown,
} from "@/app/components";

export default function Page() {
  const [films, setFilms] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
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
              )}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`
            : // 2. Else if they selected a genre → discover endpoint (filter by genre):
              selectedGenre
              ? `https://api.themoviedb.org/3/discover/movie?with_genres=${
                  selectedGenre
                }&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`
              : // 3. Otherwise → fetch the default popular films:
                `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`;
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
        const data = await res.json();
        setFilms(data.results); // store it in state
      } catch (err) {
        console.error("Network error:", err);
        setError("Network error — cannot reach server.");
      } finally {
        setLoading(false);
      }
    }

    fetchFilms(); // call the function
  }, [searchTerm, selectedGenre]);

  // Provide fallback UI while data is loading, handle fetch errors,
  // and prevent crashes if required data is missing:
  {
    loading && <p>Loading films...</p>; // stops the page unmounting and the input losing focus
  }
  if (error) return <p>{error}</p>;
  if (!loading && films.length === 0) {
    return (
      <p className="my-6 text-center">No results found. Try another search!</p>
    );
  }

  return (
    <main className="mx-10 mb-6 p-4 pt-6">
      <div
        className="
    flex flex-col gap-4 mb-6
    lg:flex-row lg:items-center lg:justify-between
  "
      >
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
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
          />
        </div>
        <div className="flex-1">
          <FilmsGrid films={films} sortOrder={sortOrder} />
        </div>{" "}
      </div>
    </main>
  );
}
