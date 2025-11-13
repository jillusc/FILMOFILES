import Link from "next/link";
import { FaFilm } from "react-icons/fa";

export default function CTABox() {
  return (
    <div className="max-w-sm p-7 rounded-lg bg-darkteal transition-colors duration-300 border-2 border-transparent hover:border-blue">
      <Link href="/browse" aria-label="Browse films">
        <FaFilm className="text-lightgrey text-8xl mx-auto mb-2" />
      </Link>
      <div>
        <Link href="/browse" aria-label="Browse films">
          <h1 className="mb-4 text-redorange text-2xl!">BROWSE</h1>
        </Link>
        <p>Take a look at our users' latest reviews and recommendations.</p>
      </div>
    </div>
  );
}
