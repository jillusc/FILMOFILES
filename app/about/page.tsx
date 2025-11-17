export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 mb-4">
      <div className="mt-25 mb-15 flex flex-col items-center text-center gap-4">
        <h1 className="text-charcoal-bg">FILMOFILES</h1>
        <h2 className="text-charcoal-bg">Honest. Insightful. Passionate.</h2>
        <h3 className="text-charcoal-bg">
          Film review community and social network for film lovers.
        </h3>
      </div>

      <div className="space-y-8">
        <section>
          <h2>About</h2>
          <p>
            Filmofiles is a film discovery app that lets users browse movies
            using live data from the{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              TMDb{" "}
            </a>
            API.
          </p>
        </section>

        <hr className="border-[#154646]" />

        <section>
          <h2>Behind the Scenes</h2>
          <p className="mb-4">
            The visual design of Filmofiles is inspired by the atmosphere of a
            darkened cinema. Its base palette of deep teal and charcoal is
            paired with vibrant accents, evocative of artificial light cutting
            through darkness. The logo's typeface has a grainy character with
            horizontal streaks, making it reminiscent of an old VHS label and
            adding a nostalgic nod to another classic medium of film watching.
          </p>
        </section>

        <hr className="border-[#154646]" />

        <section>
          <h2>FAQ</h2>
          <p className="font-bold">
            Q1. Was Filmofiles always a front-end app?
          </p>
          <p>
            No - the original version was a full-stack film review community
            built with Django and PostgreSQL - a platform where users could
            register, write reviews, post comments and interact with like-minded
            film fans.
          </p>
          <p className="font-bold mt-6">Q2. Why rebuild Filmofiles?</p>
          <p>
            This version is a fresh, streamlined rebuild using modern front-end
            technologies and is focused on clean UI, smooth performance and
            accessibility - without the need to maintain a backend.
          </p>
          <p className="font-bold mt-6">
            Q3. Will Filmofiles get user reviews, profiles or comments again?
          </p>
          <p>
            Possibly. The current version is intentionally a front-end only
            browsing app. Future updates may expand it into a social,
            review-driven platform again.
          </p>
        </section>

        <hr className="border-[#154646]" />

        <section>
          <h2>Credits</h2>
          <p className="font-bold mt-2">TMDb API</p>
          <p>
            Film data is provided by the{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDb
            </a>{" "}
            API. This product is not endorsed or certified by TMDb.
          </p>
          <p className="font-bold mt-6">Fonts</p>
          <p>
            Workbench and Montserrat are provided by{" "}
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts
            </a>
            .
          </p>
          <p className="font-bold mt-6">Icons</p>
          <p>Icons are provided by React Icons.</p>
          <p className="font-bold mt-6">Images</p>
          <p>
            Promotional film poster images used in this project belong to their
            respective copyright holders. Cinema background photography and the
            popcorn image from{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            .
          </p>
          <p className="font-bold mt-6">Frameworks & Tools</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center my-6">
            <img src="/tmdb-logo.png" alt="TMDb logo" className="w-14 h-auto" />
            <img
              src="/nextjs-logo.png"
              alt="Next.js logo"
              className="w-10 h-auto"
            />
            <img
              src="/tailwindcss-logo.png"
              alt="Tailwind logo"
              className="w-10 h-auto"
            />
            <img
              src="/typescript-logo.png"
              alt="TypeScript logo"
              className="w-10 h-auto"
            />
            <img
              src="/prettier-logo.png"
              alt="Prettier"
              className="w-10 h-auto"
            />
            <img src="/eslint-logo.png" alt="ESLint" className="w-10 h-auto" />
          </div>
        </section>

        <p className="text-sm text-center">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </main>
  );
}
