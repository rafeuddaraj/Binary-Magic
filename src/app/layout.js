import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Binary Magic Game - Interactive Game",
  description:
    "A fun and interactive game that guesses a number the user is thinking of using binary logic. The user selects cards based on numbers, and the system identifies the chosen number using a series of cards representing binary bits.",
  keywords:
    "Binary, Magic, Card Trick, Number Guessing, Interactive Game, Binary Logic, Magic Trick, Puzzle",
  author: "Rafe Uddaraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <footer className="text-white py-6 mt-12 text-center">
          <p className="text-xl font-semibold">Built with Love & Code</p>
          <p className="text-sm italic mt-2">
            By <span className="font-bold text-blue-300">Rafe Uddaraj</span>
          </p>
          <p className="text-xs mt-4">
            <span>Follow me on </span>
            <Link
              href="https://github.com/rafeuddaraj"
              target="_blank"
              className="text-blue-400 hover:text-blue-600 ml-1"
            >
              GitHub
            </Link>
          </p>

          <p className="text-xs mt-4">
            Interested in contributing?{" "}
            <Link href={"https://github.com/rafeuddaraj/Binary-Magic"}>
              <span className="font-bold text-blue-300">
                Feel free to make a pull request!
              </span>
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
