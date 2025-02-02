"use client";
import { delay } from "@/lib/delay";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const binaryMagicContext = createContext(null);

const cards = shuffleArray([
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
]);
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export default function BinaryMagicProvider({ children }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  // const [allCards] = useState(shuffleArray(cards));
  const currentCard = cards[currentCardIndex];

  const router = useRouter();

  const handleNext = () => {
    if (currentCardIndex === cards.length - 1) {
      router.push("/binary-magic/result");
    } else {
      setCurrentCardIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => Math.max(0, prev - 1));
  };

  const toggleCardSelection = (cardId) => {
    setSelectedCards((prev) =>
      prev.some((select) => select.id === cardId)
        ? prev.filter(({ id }) => id !== cardId)
        : [...prev, { id: cardId, index: currentCardIndex }]
    );
  };

  const handleReset = async () => {
    router.push("/binary-magic");
    setCurrentCardIndex(0);
    setSelectedCards([]);
  };
  const state = {
    cards,
    onNext: handleNext,
    onPrev: handlePrevious,
    onReset: handleReset,
    onToggleCardSelection: toggleCardSelection,
    selectedCards,
    currentCard,
    currentCardIndex,
  };

  return (
    <binaryMagicContext.Provider value={state}>
      {children}
    </binaryMagicContext.Provider>
  );
}

export const useMagic = () => {
  return useContext(binaryMagicContext);
};
