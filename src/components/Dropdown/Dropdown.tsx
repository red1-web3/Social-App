import ChevronDown from "@components/Icons/ChevronDown";
import clsx from "clsx";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { useMeasure } from "react-use";

function DropdownWrapper({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [scope, { height }] = useMeasure<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  return (
    <MotionConfig>
      <div className="_border rounded-md dark:bg-dark-600">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="flex items-center justify-between dark:text-light-200 w-full py-2.5 px-3.5"
        >
          <h5 className="font-medium text-lg">{label}</h5>

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
                    <ul>{children}</ul>
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

export default DropdownWrapper;
