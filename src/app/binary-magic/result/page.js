import ResultsPage from "@/components/ResultsPage";

export const metadata = {
  title: "Result - Binary Magic Game",
  description:
    "Discover the result of your binary card selections. The system reveals the number you were thinking of based on your chosen cards using binary logic.",
  keywords:
    "Binary, Magic, Card Trick, Number Guessing, Result, Interactive Game, Puzzle, Binary Logic",
  author: "Rafe Uddaraj",
};

export default function page() {
  return (
    <>
      <ResultsPage />
    </>
  );
}
