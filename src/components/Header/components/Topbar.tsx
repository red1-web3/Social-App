import { cxm } from "@utils/index";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { topBarData } from "src/constant/Topbar";

function Topbar() {
  const [active, setActive] = useState<number>(0);

  return (
    <ul className="relative flex items-center gap-x-1 dark:text-white text-sm dark:bg-dark-400 p-1 rounded-md">
      {topBarData.map(({ label }, i) => (
        <li
          key={i}
          onClick={() => setActive(i)}
          className={cxm(
            "relative px-5 cursor-pointer rounded-md select-none duration-[600ms] hover:bg-dark-300/40 font-medium dark:text-light-400",
            active === i && "!text-white"
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
      layoutId="activeTopbar"
      className={cxm("absolute inset-0 bg-dark-300 rounded-md", className)}
    />
  );
};
