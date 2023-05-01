import { cxm } from "@utils/index";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { topBarData } from "src/constant/Topbar";

function Topbar() {
  const [active, setActive] = useState<number>(0);

  return (
    <ul className="relative flex items-center gap-x-3 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md">
      {topBarData.map(({ label }, i) => (
        <li
          onClick={() => setActive(i)}
          className={classNames(
            "relative px-5 cursor-pointer rounded-md select-none"
          )}
        >
          <Link href={"#"} className="relative z-10">
            <div className="py-2">{label}</div>
          </Link>
          {i === active && <ActiveBg />}
        </li>
      ))}
    </ul>
  );
}

export default Topbar;

const ActiveBg = ({ className }: { className?: string }) => {
  return (
    <motion.div
      transition={{ type: "spring", duration: 0.6 }}
      layoutId="activeLine"
      className={cxm(
        "absolute w-full inset-0 bg-primary rounded-md",
        className
      )}
    />
  );
};
