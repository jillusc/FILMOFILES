import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-charcoal text-lightgrey py-3 pl-2 pr-7 border-b border-gold">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/FFlogo.jpg"
            alt="FILMOFILES"
            width={180}
            height={50}
            priority // "don't lazy load"
          />
        </Link>
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <Link href="/" className="transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/browse" className="transition-colors">
              Browse
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition-colors">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
