"use client";
import { useEffect, useMemo } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { bioKeywords } from "@/data";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.3, // Reduced duration for faster animation
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // Memoize the words array to prevent unnecessary re-renders
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      {
        duration,
        delay: stagger(0.08), // Reduced stagger delay for a quicker effect
      }
    );
  }, [scope, animate, duration, filter]);
  function IsKeywordCheck(word:string) {
    return useMemo(() => bioKeywords.includes(word), [word]);
  }
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div ref={scope} className="dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => {
            const isKeyword = IsKeywordCheck(word);
            return (
              <motion.span
                key={word + idx}
                className={`${isKeyword ? "text-redpink font-bold" : "dark:text-gray-100 text-black"} opacity-0`}
                style={{ filter: filter ? "blur(8px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
