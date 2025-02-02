"use client";
import { delay, motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMagic } from "@/app/binary-magic/_providers/BinaryMagicProvider";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import GlobalLoader from "./common/globalLoader";

export default function ResultsPage() {
  const { selectedCards, onReset, cards } = useMagic();

  const ids = selectedCards.map((select) => select?.id);

  const selectCardsFindingIds = cards
    .filter((select) => ids.includes(select.id))
    .map((select) => [...select.numbers])
    .flat(3);

  const guessedNumber = selectedCards.reduce((acc, current) => {
    return acc + current?.id;
  }, 0);

  const cheating = !selectCardsFindingIds.includes(guessedNumber);

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const captureRef = useRef(null);

  const captureAndSaveImage = async () => {
    const element = captureRef.current;

    if (isButtonVisible) {
      setIsButtonVisible(false);
    }

    await delay(Math.floor(Math.random() * 5) + 1);

    html2canvas(element, {
      scale: 2,
    }).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "captured-image.png";
      link.click();

      setIsButtonVisible(true);
    });
  };

  return (
    <>
      <div
        className={`min-h-screen w-full dark:bg-gray-900 bg-gray-100 p-4 sm:p-6 md:p-8 flex items-center justify-center transition-colors duration-300`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          ref={captureRef}
          className="w-full max-w-lg"
        >
          <Card
            className={`dark:bg-gray-800 dark:text-white  bg-white text-gray-900 shadow-xl transition-colors duration-300`}
          >
            <CardHeader className="flex relative">
              <CardTitle className="text-3xl sm:text-4xl text-center font-bold">
                Mind Reading Result
              </CardTitle>
              {isButtonVisible && (
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 
              dark:bg-primary dark:text-white bg-primary-foreground text-primary
              rounded-full p-3 hover:bg-primary/80 dark:hover:bg-primary-700 
              transition duration-300"
                  onClick={captureAndSaveImage}
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 8H2V4.5A2.5 2.5 0 0 1 4.5 2H8v1H4.5A1.5 1.5 0 0 0 3 4.5zm1.5 14A1.5 1.5 0 0 1 3 20.5V17H2v3.5A2.5 2.5 0 0 0 4.5 23H8v-1zM22 20.5a1.5 1.5 0 0 1-1.5 1.5H17v1h3.5a2.5 2.5 0 0 0 2.5-2.5V17h-1zM20.5 2H17v1h3.5A1.5 1.5 0 0 1 22 4.5V8h1V4.5A2.5 2.5 0 0 0 20.5 2zM14 7h4v4h1V6h-5zm-7 4V7h4V6H6v5zm11 3v4h-4v1h5v-5zm-7 4H7v-4H6v5h5z" />
                    <path fill="none" d="M0 0h24v24H0z" />
                  </svg>
                </button>
              )}
            </CardHeader>

            <CardContent>
              {cheating ? (
                <div>
                  <div className="bg-yellow-200 text-yellow-800 p-4 rounded-t-lg border-b-2 border-yellow-400">
                    <strong>Cheating Alert! 😜</strong>
                  </div>
                  <div className="p-4">
                    <p className="text-xl font-semibold mb-4">
                      Oops! It looks like you're cheating. 😄
                    </p>
                    <p className="text-gray-600">
                      You didn't really think of a number, did you? Let's be
                      honest and play fair! 😜
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-lg mb-4 text-center">
                    Based on your selections, the number you thought of is:
                  </p>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                    className={`text-5xl sm:text-6xl font-bold text-center mb-6 dark:text-primary text-primary`}
                  >
                    {guessedNumber}
                  </motion.div>
                  <p className="text-base text-center">
                    You selected the following cards:
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-4">
                    {selectedCards
                      ?.sort((a, b) => a?.index - b?.index)
                      ?.map((cardId) => (
                        <motion.div
                          key={cardId?.index}
                          className={`dark:bg-primary dark:text-primary-foreground bg-primary/20 text-primary rounded-full p-3 text-center font-bold`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Card {cardId?.index + 1}
                        </motion.div>
                      ))}
                  </div>
                </>
              )}
            </CardContent>
            {isButtonVisible && (
              <CardFooter className="flex justify-center mt-6">
                <Button
                  onClick={onReset}
                  className={`dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 bg-primary/20 text-primary hover:bg-primary/30`}
                >
                  Play Again
                </Button>
              </CardFooter>
            )}
          </Card>
        </motion.div>
      </div>
      {!isButtonVisible && <GlobalLoader />}
    </>
  );
}
