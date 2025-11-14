"use client";
import { useEffect, useState } from "react";
import { FilmsGrid } from "@/app/components";

export default function Page() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // use useEffect to fetch films when the page loads:
  useEffect(() => {
    // NOTE: fetch does NOT throw on 400/500 errors - only on real network failures
    async function fetchFilms() {
      try {
        // send the request and wait for the server’s response:
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&include_adult=false`
        );
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
  }, []);

  // Provide fallback UI while data is loading, handle fetch errors,
  // and prevent crashes if required data is missing:
  if (loading) return <p className="my-6 text-center">Loading films...</p>;
  if (error) return <p>{error}</p>;
  if (!loading && films.length === 0) {
    return (
      <p className="my-6 text-center">No results found. Try another search!</p>
    );
  }

  return (
    <main className="text-center my-4 p-4">
      <FilmsGrid films={films} />
    </main>
  );
}
