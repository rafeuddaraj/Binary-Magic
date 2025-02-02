import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
