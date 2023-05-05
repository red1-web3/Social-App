import { motion } from "framer-motion";
import { ReactNode } from "react";

function DropdownList({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  return (
    <motion.li
      initial={{ y: -20, opacity: 0 }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: index * 0.05 },
      }}
      exit={{
        opacity: 0,
        transition: { delay: 0, duration: 0.1 },
      }}
    >
      {children}
    </motion.li>
  );
}

export default DropdownList;
