"use client";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ResultsPage from "./ResultsPage"
import IntroScreen from "./IntroScreen"

const cards = [
  {
    id: 1,
    numbers: [
      [1, 3, 5, 7, 9],
      [11, 13, 15, 17, 19],
      [21, 23, 25, 27, 29],
    ],
  },
  {
    id: 2,
    numbers: [
      [2, 3, 6, 7, 10],
      [11, 14, 15, 18, 19],
      [22, 23, 26, 27, 30],
    ],
  },
  {
    id: 4,
    numbers: [
      [4, 5, 6, 7, 12],
      [13, 14, 15, 20, 21],
      [22, 23, 28, 29, 30],
    ],
  },
  {
    id: 8,
    numbers: [
      [8, 9, 10, 11, 12],
      [13, 14, 15, 24, 25],
      [26, 27, 28, 29, 30],
    ],
  },
  {
    id: 16,
    numbers: [
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30],
    ],
  },
]

export default function CardSelection() {
  const [gameState, setGameState] = useState("intro")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const currentCard = cards[currentCardIndex]

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(darkModeMediaQuery.matches)

    const handleChange = (e) => setIsDarkMode(e.matches)
    darkModeMediaQuery.addEventListener("change", handleChange)

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, [])

  const handleStartGame = () => {
    setGameState("playing")
  }

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    if (currentCardIndex === cards.length - 1) {
      setGameState("results")
    } else {
      setCurrentCardIndex((prev) => prev + 1)
    }
  }

  const toggleCardSelection = (cardId) => {
    setSelectedCards(
      (prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId])
    )
  }

  const handleBackToIntro = () => {
    setGameState("intro")
    setCurrentCardIndex(0)
    setSelectedCards([])
  }

  if (gameState === "intro") {
    return <IntroScreen onStart={handleStartGame} isDarkMode={isDarkMode} />;
  }

  if (gameState === "results") {
    return (
      <ResultsPage
        selectedCards={selectedCards}
        onBack={handleBackToIntro}
        isDarkMode={isDarkMode} />
    );
  }

  return (
    (<div
      className={`min-h-screen w-full ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} p-4 sm:p-6 md:p-8 flex items-center justify-center transition-colors duration-300`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg">
          <Card
            className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} shadow-xl transition-colors duration-300 cursor-pointer`}
            onClick={() => toggleCardSelection(currentCard.id)}>
            <CardHeader>
              <CardTitle
                className={`text-3xl sm:text-4xl text-center font-bold ${selectedCards.includes(currentCard.id) ? "text-primary" : ""}`}>
                Card {currentCard.id}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {currentCard.numbers.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-5 gap-2">
                    {row.map((number) => (
                      <motion.div
                        key={number}
                        className={`h-12 sm:h-16 flex items-center justify-center text-lg sm:text-xl font-bold rounded-md ${
                          selectedCards.includes(currentCard.id)
                            ? isDarkMode
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/20 text-primary"
                            : isDarkMode
                              ? "bg-gray-700"
                              : "bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        {number}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
            <div className="flex justify-between px-6 pb-6">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                disabled={currentCardIndex === 0}
                className={`${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} text-current`}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Prev
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className={`${isDarkMode ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary/20 text-primary hover:bg-primary/30"}`}>
                {currentCardIndex === cards.length - 1 ? "View Result" : "Next"}
                {currentCardIndex !== cards.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>)
  );
}

