"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMagic } from "./_providers/BinaryMagicProvider";
import Image from "next/image";

export default function CardSelection() {
  const {
    onNext,
    onPrev,
    onToggleCardSelection,
    cards,
    selectedCards,
    currentCard,
    currentCardIndex,
  } = useMagic();


  return (
    <div
      className={`min-h-screen w-full  dark:bg-gray-900 bg-gray-100 p-4 sm:p-6 md:p-8 flex items-center justify-center transition-colors duration-300`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-5/6 flex"
        >
          <div className="w-[25%]">
            <Image
              className="scale-x-[-1]"
              src={"/present.png"}
              width={400}
              height={500}
              alt="Introduce"
            />
          </div>
          <Card
            className={`dark:bg-gray-800 dark:text-white  bg-white text-gray-900 shadow-xl transition-colors duration-300 cursor-pointer w-3/4`}
            onClick={() => onToggleCardSelection(currentCard.id)}
          >
            <CardHeader>
              <CardTitle
                className={`text-3xl sm:text-4xl text-center font-bold ${
                  selectedCards.some((select) => select.id === currentCard.id)
                    ? "text-primary"
                    : ""
                }`}
              >
                🌟 Question {currentCardIndex + 1} / {cards.length} 🌟
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
                          selectedCards.some(
                            (select) => select.id === currentCard.id
                          )
                            ? " dark:bg-primary dark:text-primary-foreground bg-primary/20 text-primary "
                            : " dark:bg-gray-700 bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
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
                  e.stopPropagation();
                  onPrev();
                }}
                disabled={currentCardIndex === 0}
                className={`dark:bg-gray-700 dark:hover:bg-gray-600 bg-gray-200 hover:bg-gray-300 text-current`}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Prev
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className={`dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 bg-primary/20 text-primary hover:bg-primary/30
                }`}
              >
                {currentCardIndex === cards.length - 1 ? "View Result" : "Next"}
                {currentCardIndex !== cards.length - 1 && (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="p-4 text-center text-green-400">
              Is your chosen number on this card? If yes, please select the
              card. If not, simply proceed by clicking 'Next'
            </p>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
