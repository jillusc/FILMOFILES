import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next"; // type for typing the metadata object
import { Navbar, Footer } from "./components";

// configure font and assign it to a CSS variable:
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// define global metadata for the app:
export const metadata: Metadata = {
  title: "FILMOFILES",
  description: "Film review community and social network for film lovers",
  icons: {
    icon: "/favicon.png",
  },
};

// define the root layout that wraps all pages:
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
