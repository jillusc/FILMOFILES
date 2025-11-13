import { CTABox } from "./components";

export default function Page() {
  return (
    <main className="text-center p-6 min-h-screen bg-[url('/cinema.webp')] bg-cover bg-center bg-no-repeat">
      <div className="mt-25 mb-15 flex flex-col items-center gap-4">
        <h1 className="text-charcoal-bg">FILMOFILES</h1>
        <h2 className="text-charcoal-bg">Honest. Insightful. Passionate.</h2>
        <h3 className="text-charcoal-bg">
          Film review community and social network for film lovers.
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <CTABox />
      </div>
    </main>
  );
}
