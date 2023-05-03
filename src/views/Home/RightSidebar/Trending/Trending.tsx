import ChevronDown from "@components/Icons/ChevronDown";
import clsx from "clsx";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { useMeasure } from "react-use";
import TrendingList from "./TrendingList";

function Trending() {
  const [scope, { height }] = useMeasure<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <MotionConfig>
      <div className="_border rounded-md dark:bg-dark-600">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center justify-between dark:text-light-200 w-full py-2.5 px-3.5"
        >
          <h5 className="font-medium text-lg">Today Trending</h5>

          <span
            className={clsx(
              expanded ? "rotate-180" : "rotate-0",
              "inline-block duration-300"
            )}
          >
            <ChevronDown />
          </span>
        </button>
        <motion.div animate={{ height }} className="overflow-hidden">
          <div ref={scope}>
            <AnimatePresence>
              {expanded ? (
                <div className="px-3.5">
                  <div>
                    <ul>
                      {[1, 2, 3, 4].map((item, i) => (
                        <TrendingList key={i} index={i} />
                      ))}
                    </ul>
                    <button className="text-primary font-medium py-3 block w-full text-center border-t border-gray-400/20 ">
                      See all
                    </button>
                  </div>
                </div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
}

export default Trending;
