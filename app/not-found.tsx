import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative p-6 text-center flex flex-col items-center h-full">
      <Image
        src="/popcorn.png"
        alt="popcorn"
        width={600}
        height={600}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px]"
      />
      <div className="relative z-10 mt-25 mb-15 flex flex-col items-center gap-4">
        <h1 className="text-charcoal-bg">404</h1>
        <h2 className="text-charcoal-bg">Page Not Found</h2>
        <h3 className="text-charcoal-bg">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </h3>

        <Link href="/" className="mt-4 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-charcoal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-blue"
            >
              {/* equilateral triangle scaled to the viewbox: */}
              <polygon points="16,4 6,12 16,20" />
            </svg>
          </span>
          <span className="text-charcoal-bg">
            BACK to the Filmofiles home page
          </span>
        </Link>
      </div>
    </main>
  );
}
