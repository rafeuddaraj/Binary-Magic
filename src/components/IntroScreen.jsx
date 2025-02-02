import { MotionDiv, MotionH1, MotionP } from "./common/motion-component";
import Link from "next/link";

export default function IntroScreen() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col items-center justify-center min-h-screen p-4 text-center dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900`}
    >
      <MotionH1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="text-4xl sm:text-5xl font-bold mb-6"
      >
        Mind Reading Game
      </MotionH1>
      <MotionP
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg sm:text-xl mb-8 max-w-md"
      >
        Think of a number in your mind. I'll show you some cards one after
        another. If your number is on the card, select it. If not, don't select
        it.
      </MotionP>
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <Link
          href={"/binary-magic"}
          className={`text-lg px-8 py-4 rounded-full dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 bg-primary/20 text-gray-800 hover:bg-primary/30`}
        >
          Start the Game
        </Link>
      </MotionDiv>
    </MotionDiv>
  );
}
